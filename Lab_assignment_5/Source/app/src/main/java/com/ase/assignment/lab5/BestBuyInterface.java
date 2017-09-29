package com.ase.assignment.lab5;

import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;

/**
 * Created by shreya on 9/28/17.
 */

public interface BestBuyInterface
{   @GET("products/{sku}/stores.json")
    Call<StoreResult> getResponse(@Path("sku") String productcd, @Query("postalCode") String postalCode, @Query("apiKey") String apiKey);
    @GET("products(search={name})?format=json&show=sku&apiKey=68qthcka6yz8w2vkf7z2xqd7")
    Call<StoreLocation> getResponse(@Path("name") String name);
}


