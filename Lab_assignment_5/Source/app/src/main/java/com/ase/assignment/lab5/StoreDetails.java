package com.ase.assignment.lab5;

import com.google.gson.annotations.SerializedName;
/**
 * Created by Shreya on 9/28/2017.
 */

public class StoreDetails {
    @SerializedName("storeID")
    private String storeID;
    @SerializedName("name")
    private String name;
    @SerializedName("address")
    private String address;
    @SerializedName("city")
    private String city;
    @SerializedName("state")
    private String  state;
    @SerializedName("postalCode")
    private String postalCode;
    @SerializedName("storeType")
    private String storeType;

    public String getStoreID()
    {
        return storeID;
    }

    public void setStoreID(String storeID)
    {
        this.storeID = storeID;
    }

    public String getName()
    {
        return name;
    }

    public void setName(String name)
    {
        this.name = name;
    }

    public String getAddress()
    {
        return address;
    }

}
