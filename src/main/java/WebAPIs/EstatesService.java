package WebAPIs;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import java.util.ArrayList;

import Enums.DealType;
import Estates.Estate;
import static SearchEngine.Searcher.*;

@Path("/estates")
public class EstatesService {

    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public ArrayList<Estate> EstatesList(@QueryParam("buildingType") String buildingType, @QueryParam("dealType") int dealType,
                                         @QueryParam("area") int area, @QueryParam("price") int price) throws Exception{

        ArrayList<Estate> estates = new ArrayList<Estate>();
        estates = findLocalEstates(buildingType, DealType.valueOf(dealType), price, area);
        estates.addAll(findAgencyEstates(buildingType, DealType.valueOf(dealType), price,area));
        return estates;
    }

}
