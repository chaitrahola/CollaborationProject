package com.niit.angularbackend.daoImpl;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.niit.angularbackend.dao.BlogDao;
import com.niit.angularbackend.model.Blog;

@Transactional
@Repository("blogDao")
public class BlogDaoImpl implements BlogDao {

	@Autowired
	SessionFactory sessionFactory;
	
	public BlogDaoImpl(SessionFactory sessionFactory) {
		System.out.println("inside");
		this.sessionFactory = sessionFactory;
	}

	public void addBlog(Blog blog) {
		sessionFactory.getCurrentSession().save(blog);		
	}

	public List<Blog> viewBlogs() {
		Session session=sessionFactory.getCurrentSession();
		
		Criteria ct=session.createCriteria(Blog.class);
		ct.add(Restrictions.eq("status",true));
		List<Blog> list = session.createCriteria(Blog.class).list();
		return list;
	}

	public List<Blog> viewAllBlogs() {
	
		
		
		
		Session session=sessionFactory.getCurrentSession();
		Criteria ct=session.createCriteria(Blog.class);
		
		int size=Blog.size();
		for (int i = 0; i<size-1; i++)
		{
			System.out.println(Blog.get(i)+ "" +Blog.get(i+1));
			
	
		}
		
		ct.add(Restrictions.eq("status",true));
		List list=ct.list();	
		return list;	
	}

	public void deleteBlog(Blog blog) {
		sessionFactory.getCurrentSession().delete(blog);
		
	}

	public void updateBlog(Blog blog) {
		sessionFactory.getCurrentSession().saveOrUpdate(blog);
		
	}

	public List<Blog> viewMyBlogs(String postedby) {
		System.out.println("in view my blogs");
		Session session=sessionFactory.getCurrentSession();
		Criteria ct=session.createCriteria(Blog.class);
		ct.add(Restrictions.eq("postedby",postedby));
		ct.add(Restrictions.eq("status",true));
		List list=ct.list();	
		return list;
	}


}
