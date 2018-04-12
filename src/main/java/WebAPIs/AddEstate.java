package WebAPIs;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.lang.String;

import Exceptions.EstateParametersException;
import KhaneBeDoosh.*;
import org.json.JSONObject;

@WebServlet("/addestate")
public class AddEstate extends JsonAPI {

    public void init() throws ServletException {
        // Do required initialization
    }

    @Override
    public Boolean validateData(JSONObject obj) {
        return null;
    }

    public void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        JSONObject req = parseJson(request);
        String buildingType = req.get("buildingType").toString();
        String dealType = req.get("dealType").toString();
        String price = req.get("sellPrice").toString();
        String area = req.get("area").toString();
        String phone = req.get("phone").toString();
        String address = req.get("address").toString();
        String description = req.get("description").toString();
        try {
            checkEstateRegistrationParamsValidation(buildingType, dealType, price, area, phone);
            Website.addEstate(buildingType, dealType, Integer.parseInt(price), Integer.parseInt(area), phone, address, description);
            response.setStatus(HttpServletResponse.SC_OK);
        } catch (EstateParametersException e){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
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
