package Estates;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.lang.String;

import Exceptions.EstateParametersException;
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
        try {
            checkEstateRegistrationParamsValidation(buildingType, dealType, price, area, phone);
            Website.addEstate(buildingType, dealType, Integer.parseInt(price), Integer.parseInt(area), phone, address, description);
            response.sendRedirect("/" + "?msg=The+Estate+added+successfully.");
        } catch (EstateParametersException e){
            response.sendRedirect("/" + "?msg=Invalid Parameters for house registration.");
        }
    }

    public void destroy() {
        // do nothing.
    }

    public void checkEstateRegistrationParamsValidation(String buildingType, String dealType, String price, String area, String phone) throws EstateParametersException{
        if (!(buildingType.equals("ویلایی") || buildingType.equals("آپارتمان")) ||
                !(dealType.equals("1") || dealType.equals("0")) ||
                !phone.matches("[0-9]+"))
            throw new EstateParametersException();
        try {
            int price_ = Integer.parseInt(price);
            int area_ = Integer.parseInt(area);
            if(price_ < 0 || area_ < 0)
                throw new EstateParametersException();
        } catch (NumberFormatException e){
            throw new EstateParametersException();
        } //TODO: checking price for rent situation must add.
    }

}
