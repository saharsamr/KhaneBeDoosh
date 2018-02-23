package Estates;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.lang.String;
import KhaneBeDoosh.*;

@WebServlet("/AddNewEstate")
public class AddNewEstate extends HttpServlet {

    public void init() throws ServletException {
        // Do required initialization
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String buildingType = request.getParameter("buildingType");
        String dealType = request.getParameter("dealType");
        String price = request.getParameter("sellPrice");
        String area = request.getParameter("area");
        String phone = request.getParameter("phone");
        String address = request.getParameter("address");
        String description = request.getParameter("description");

        Website.addEstate(buildingType, dealType, Integer.parseInt(price), Integer.parseInt(area), phone, address, description);
        response.sendRedirect("/"+"?msg=The+Estate+added+successfully.");
    }

    public void destroy() {
        // do nothing.
    }


}
