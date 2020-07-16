/**
 * Created by kacper on 16.07.2020.
 */

public with sharing class mockHeaderController {

    @AuraEnabled
    public static String login(String username,String password,String startUrl) {
        System.debug(username);
        System.debug(password);


        PageReference pageReference = Site.login(username, password, startUrl);
        System.debug(pageReference.getUrl());

        return pageReference.getUrl();
    }
}