package com.ase.assignment.lab10;

import android.app.Activity;
import android.os.Bundle;
import android.os.StrictMode;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;
import org.json.JSONArray;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainActivity extends Activity {

        private TextView mTextView;
        private EditText key;

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_main);
            mTextView = (TextView) findViewById(R.id.outputdisplay);
            Button button = (Button) findViewById(R.id.getcalories);
            StrictMode.ThreadPolicy policy = new StrictMode.ThreadPolicy.Builder().permitAll().build();
            StrictMode.setThreadPolicy(policy);
        }

        public void caloriesCount(View v) {
            key = (EditText) findViewById(R.id.foodname);
            String s = key.getText().toString();
            String z = s.replace(" ", "_");
            String getURL = "https://api.nutritionix.com/v1_1/search/"+ z +"?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories&appId=916c917f&appKey=9132bee27f9beae65c927ef423ba7619";
            String response = null;
            BufferedReader bfr = null;
            try {
                URL url = new URL(getURL);
                HttpURLConnection conn = (HttpURLConnection) url.openConnection();
                conn.setRequestMethod("GET");
                conn.connect();

                bfr = new BufferedReader(new InputStreamReader(conn.getInputStream()));
                StringBuilder sb = new StringBuilder();
                String line = null;


                while ((line = bfr.readLine()) != null) {
                    sb.append(line + " ");
                }
                response = sb.toString();

            } catch (Exception ex) {
                String Error = ex.getMessage();
            } finally {
                try {
                    bfr.close();
                } catch (Exception ex) {

                }
            }

            try {
                JSONObject f = new JSONObject(response);

                JSONArray array = f.getJSONArray("hits");
                JSONObject array1 = array.getJSONObject(0);
                JSONObject fields = array1.getJSONObject("fields");
                String cal = fields.getString("nf_calories");
                if (cal == null) {
                    Toast.makeText(this, "Sorry Error occured!", Toast.LENGTH_SHORT).show();
                }
                mTextView.setText("Calories :" + cal.toString() );
            } catch (Exception err) {
                String Error = err.getMessage();
            }
        }
    }

