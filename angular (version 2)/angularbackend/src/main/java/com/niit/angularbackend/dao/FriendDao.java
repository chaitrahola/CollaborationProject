package com.niit.angularbackend.dao;

import java.util.List;

import com.niit.angularbackend.model.Friend;




public interface FriendDao {

	void addFriend(Friend friend);

	void updateFriend(Friend friend);

	void deleteFriend(Friend friend);

	List<Friend> viewFriends(String name);
}
