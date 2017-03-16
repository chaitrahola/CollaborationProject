package com.niit.angularbackend.dao;

import java.util.List;

import com.niit.angularbackend.model.Jobs;



public interface JobsDao {

	void addJobs(Jobs jobs);

	List<Jobs> viewJobs();

	void deleteJob(Jobs jobs);

	void updateJob(Jobs jobs);
}
