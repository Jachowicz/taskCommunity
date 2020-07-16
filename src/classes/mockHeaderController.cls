public with sharing class mockHeaderController {

    @AuraEnabled
    public static String login(String username,String password,String startUrl) {
        PageReference pageReference = Site.login(username, password, startUrl);
        return pageReference.getUrl();
    }
}