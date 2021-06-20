package com.betha.login.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.betha.login.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
		
}
