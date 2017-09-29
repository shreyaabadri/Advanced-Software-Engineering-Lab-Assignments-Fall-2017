package com.ase.assignment.lab5;

import java.util.ArrayList;
import com.google.gson.annotations.SerializedName;
/**
 * Created by Shreya on 9/28/2017.
 */

public class StoreResult {
    @SerializedName("ispuEligible")
    private String ispuEligible;
    @SerializedName("stores")
    private ArrayList<StoreDetails> stores;

    public String getIspuEligible() {
        return ispuEligible;
    }

    public void setIspuEligible(String ispuEligible) {
        this.ispuEligible = ispuEligible;
    }

    public ArrayList<StoreDetails> getStores() {
        return stores;
    }

    public void setStores(ArrayList<StoreDetails> stores) {
        this.stores = stores;
    }
}
