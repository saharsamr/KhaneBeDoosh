package WebAPIs;

import java.io.*;
import static java.lang.System.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.lang.String;

import Exceptions.EstateParametersException;
import KhaneBeDoosh.*;
import org.json.JSONObject;

@WebServlet("/addestate")
public class AddEstate extends HttpServlet {

    public void init() throws ServletException {
        // Do required initialization
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        JSONObject req = JsonAPI.parseJson(request);
        String dealType = req.get("dealType").toString();
        String buildingType = req.get("buildingType").toString();
        String sellPrice = req.get("sellPrice").toString();
        String basePrice = req.get("basePrice").toString();
        String rentPrice = req.get("rentPrice").toString();
        String area = req.get("area").toString();
        String phone = req.get("phone").toString();
        String address = req.get("address").toString();
        String description = req.get("description").toString();
        try {
            checkEstateRegistrationParamsValidation(buildingType, dealType, sellPrice, basePrice, rentPrice, area, phone);
            Website.addEstate(buildingType, dealType, Integer.parseInt(sellPrice), Integer.parseInt(basePrice), Integer.parseInt(rentPrice), Integer.parseInt(area), phone, address, description);
            response.setStatus(HttpServletResponse.SC_OK);
        } catch (EstateParametersException e){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
        }
    }

    public void destroy() {
        // do nothing.
    }

    public void checkEstateRegistrationParamsValidation(String buildingType, String dealType, String sellPrice, String basePrice, String rentPrice, String area, String phone) throws EstateParametersException{
        if (!(buildingType.equals("ویلایی") || buildingType.equals("آپارتمان")) ||
                !(dealType.equals("1") || dealType.equals("0")) ||
                !phone.matches("[0-9]+"))
            throw new EstateParametersException();
        try {
            int sell = Integer.parseInt(sellPrice);
            int base = Integer.parseInt(basePrice);
            int rent = Integer.parseInt(rentPrice);
            int area_ = Integer.parseInt(area);
            if(sell < 0 || base < 0 || rent < 0 || area_ < 0)
                throw new EstateParametersException();
        } catch (NumberFormatException e){
            throw new EstateParametersException();
        } //TODO: checking price for rent situation must add.
    }

}
