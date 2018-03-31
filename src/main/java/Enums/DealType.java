package Enums;

import java.util.HashMap;
import java.util.Map;

public enum DealType{
    sell(0), rent(1);

    private int value;
    private static Map map = new HashMap();

    DealType (int value){
        this.value = value;
    }

    static {
        for (DealType dealType : DealType.values()) {
            map.put(dealType.value, dealType);
        }
    }

    public static DealType valueOf(int dealType) {
        return (DealType) map.get(dealType);
    }

    public int getValue() {
        return value;
    }

}
