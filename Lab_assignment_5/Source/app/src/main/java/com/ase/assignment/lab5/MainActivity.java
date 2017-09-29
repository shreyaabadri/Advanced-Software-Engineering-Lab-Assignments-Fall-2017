package com.ase.assignment.lab5;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;


/**
 * Created by Shreya on 9/21/2017.
 */

public class MainActivity extends AppCompatActivity{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    }

    public void startClick(View v)
    {


        Intent redirect=new Intent(MainActivity.this,LoginActivity.class);
        startActivity(redirect);
    }


}
