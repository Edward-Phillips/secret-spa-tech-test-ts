This is the Secret Spa Technical Test. Please find instructions here:
https://www.notion.so/secretspa/Secret-Spa-Code-Test-d81a9d646831481a908dd795adf26143

# Notes
 - I noticed the time range for anyTime was limited between 6-10am in the morning so assumed this to be a typo and have set it to 10pm instead of 6am.
 - I haven't used mobx before so may have handled some of the asynchronous actions and triggers in a less than ideal way, e.g. the useEffect in the Footer component feels like it could probably be a reaction or computed value but I'm not experienced enough with mobx to know the right mobx implementation so went with a simple useEffect instead.