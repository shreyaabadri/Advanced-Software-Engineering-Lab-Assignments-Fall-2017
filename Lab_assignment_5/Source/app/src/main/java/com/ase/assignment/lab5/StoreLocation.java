package com.ase.assignment.lab5;


import java.util.ArrayList;
import com.google.gson.annotations.SerializedName;
/**
 * Created by Shreya on 9/28/2017.
 */

public class StoreLocation {

    @SerializedName("sku")
    ArrayList<String> sku;

    public ArrayList<String> getSku()
    {
        return sku;
    }

    public void setSku(ArrayList<String> sku)
    {
        this.sku = sku;
    }
}
