package SearchEngine;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.util.*;
import java.lang.String;
import KhaneBeDoosh.*;
import Estates.Estate;

@WebServlet("/GetEstateList")
public class GetEstatesList extends HttpServlet {

    public void init() throws ServletException {
        // Do required initialization
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

    public void destroy() {
        // do nothing.
    }


}
