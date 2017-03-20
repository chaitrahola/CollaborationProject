package com.niit.angularbackend.dao;

import java.util.List;

import com.niit.angularbackend.model.Users;


public interface UsersDao {
	

		void registerUser(Users user);

		void updateUsers(Users users);

		List<Users> listUsers();

		public List<Users> findFriends(String name);

		int validateUser(String name, String password);

		void logout(String name);

	}



