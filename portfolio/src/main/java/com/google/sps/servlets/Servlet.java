package com.google.sps.servlets;

import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/** Handles requests sent to the /servlet URL*/
@WebServlet("/servlet")
public class Servlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    Gson gson = new Gson();
    ArrayList<String> list = new ArrayList<String>();
    list.add("Digital Arts and Sciences Engineer ");
    list.add("Full-Stack Developer ");
    list.add("Scrum Master ");
    list.add("Google SPS participant! >:) ");
    String strList = gson.toJson(list);
    response.setContentType("text/html;");
    response.getWriter().println(strList);
  }
}
