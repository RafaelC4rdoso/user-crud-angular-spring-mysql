package com.betha.login.model.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.betha.login.exception.SqlException;

public class UserDAO {

	Connection conn = null;
	Statement st = null;
	ResultSet rs = null;

	public List<String> getRegister() {
		List<String> register = new ArrayList<>();
		try {
			conn = ConnectionFactory.getConnection();
			st = conn.createStatement();
			rs = st.executeQuery("SELECT register FROM user");
			while (rs.next()) {
				String str = rs.getString("register");
				register.add(str);
			}
		} catch (SQLException e) {
			throw new SqlException(e.getMessage());
		}
		return register;
	}
}
