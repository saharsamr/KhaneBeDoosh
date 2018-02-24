package Estates;

import java.net.URL;
import java.util.Date;
import Enums.*;

public class Estate {

    public Estate (
            String id, int area,
            String buildingType,
            String address,
            String dealType,
            int ownerID
    )
    {
        this.id =  id;
        this.area = area;
        this.buildingType = buildingType;
        this.address = address;
        if(dealType == "رهن-اجاره")
            this.dealType = DealType.rent;
        else
            this.dealType = DealType.sell;
        this.ownerID = ownerID;
    }

    public Estate (
            String id,
            int area,
            String buildingType,
            DealType dealType,
            int sellPrice,
            int rentPrice,
            int basePrice
    )
    {
        this.area = area;
        this.buildingType = buildingType;
        this.dealType = dealType;
        this.sellPrice = sellPrice;
        this.rentPrice = rentPrice;
        this.basePrice = basePrice;
    }

    public boolean hasConditions(String buildingType, DealType dealType, int price, int area){
        if (this.area == area && this.buildingType == buildingType && this.dealType == dealType){
            if (dealType == DealType.rent)
                return (price == rentPrice + basePrice);
            else
                return (price == sellPrice);
        }
        return false;
    }

    public int getRentPrice() {
        return rentPrice;
    }

    public int getSellPrice() {
        return sellPrice;
    }

    public int getBasePrice() {
        return basePrice;
    }

    public int getArea() {
        return area;
    }

    public String getBuildingType() {
        return buildingType;
    }

    public DealType getDealType() {
        return dealType;
    }

    public String getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public URL getImageURL() {
        return imageURL;
    }

    public String getAddress() {
        return address;
    }

    public void setBasePrice(int basePrice) {
        this.basePrice = basePrice;
    }

    public void setRentPrice(int rentPrice) {
        this.rentPrice = rentPrice;
    }

    public void setSellPrice(int sellPrice) {
        this.sellPrice = sellPrice;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    private String id;
    private int area;
    private String buildingType;
    private String address;
    private URL imageURL;
    private DealType dealType;
    private int basePrice;
    private int rentPrice;
    private int sellPrice;
    private String phone;
    private String description;
    private Date expireTime;
    private int ownerID;
}
