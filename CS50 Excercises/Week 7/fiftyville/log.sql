-- Keep a log of any SQL queries you execute as you solve the mystery.
.tables --Gives me what tables ill be working with
.schema --Gives the tables schema
--Crime takes place 28 July 2023  on Humphrey street
SELECT description From crime_scene_reports WHERE month = 7 AND day = 28 AND street = 'Humphrey street'; -- see the report of what happened
--Theft of the CS50 duck took place at 10:15am at the Humphrey Street bakery. Interviews were conducted today with three witnesses who were present at the time – each of their interview transcripts mentions the bakery.
-- Check Bakey security logs at 10:15am see activity and license plaates
SELECT activity,license_plate FROM bakery_security_logs
WHERE month = 7 AND day = 28
AND hour = 10 AND minute = 15;
--No activity therefor check one minute after incident and one minute before
SELECT activity,license_plate,hour,minute FROM bakery_security_logs
WHERE month = 7 AND day = 28
AND hour = 10 AND minute = 16;
--exit at 10:16 exit|5P2BI95 and entrance at 10:14 entrance|13FNH73
--Just get the log between 9 hours and 11 hours;
SELECT activity,license_plate,hour,minute,year FROM bakery_security_logs
WHERE month = 7 AND day = 28
AND hour BETWEEN 9 AND 11;
-- Cars that entered and exited around 10:15am (entrance|5P2BI95|9|15 exit|5P2BI95|10|16) (entrance|G412CB7|9|28 exit|G412CB7|10|20 )
-- Next time to search the people with have these two license plates
SELECT name FROM people
WHERE license_plate = '5P2BI95';
-- Vanessa 5P2BI95 and Sofia G412CB7 suspicious persons
-- Check both of these people's interviews if they have done them
SELECT name,day,month,transcript FROM interviews
WHERE name LIKE 'Vanessa';
--Vanessa had no interview (she is suspicious probably her) , Sophia's interview was on the 13 of the first month  ( might still be suspicious)
--Let's see interviews on the 28/07.
SELECT name,day,month,transcript FROM interviews
WHERE day = 28 AND month = 7;
--Ruth  Stated that she saw a car leave within 10 minutes of the crime which took place at 10:15 therefore can't be either vanessa or sophia if we trust ruth
-- Eugene recognized the thief at the ATM, withdrawing money , legget street
--Raymond said Call lasted less than a inute , needed to purchase a flight ticket for the 29/07 asked accomplice to help them
--Run quesy to check cars again 
SELECT activity,license_plate,hour,minute,year FROM bakery_security_logs
WHERE month = 7 AND day = 28
AND hour BETWEEN 9 AND 11;
--exit|G412CB7|10|20|2021 Sophia
--exit|L93JTIZ|10|21|2021
--exit|322W7JE|10|23|2021
--exit|0NTHK55|10|23|2021
--Checking these other  numbers plates
SELECT name FROM people
WHERE license_plate = 'L93JTIZ'
OR license_plate = '322W7JE'
OR license_plate = '0NTHK55';
--Sophia,Iman,Diana,Kelsey
--Lets first check ATM transactions on these 4 people
SELECT name, transaction_type, atm_location, amount, day, month FROM atm_transactions,people,bank_accounts
WHERE atm_transactions.account_number = bank_accounts.account_number
AND bank_accounts.person_id = people.id
AND day = 28 AND month = 7
AND (name = 'Sophia' OR name = 'Iman' OR name = 'Diana' OR name = 'Kelsey');
-- Diana|withdraw|Leggett Street|35|28|7
--Iman|withdraw|Leggett Street|20|28|7
--So narrowed down to these two people
--Lets check phone calls that lasted less that a minute as the thief left the bakery
SELECT name,caller, receiver, duration FROM phone_calls,people
WHERE phone_calls.caller = people.phone_number
AND (name = 'Iman' OR name= 'Diana')
AND day = 28 AND month = 7
AND duration < 60;
--Diana made a call of 49 seconds, most likely suspect
--Let's check if she took any flights first
SELECT name,day,month,full_name,city FROM airports,flights,passengers,people
WHERE passengers.passport_number = people.passport_number
AND passengers.flight_id = flights.id
AND flights.origin_airport_id = airports.id
AND name = 'Diana'
AND day = 29 and month = 7;
--Diana|29|7|Fiftyville Regional Airport|Fiftyville
--Time check where she went
SELECT name,day,month,full_name,city FROM airports,flights,passengers,people
WHERE passengers.passport_number = people.passport_number
AND passengers.flight_id = flights.id
AND flights.destination_airport_id = airports.id
AND name = 'Diana'
AND day = 29 and month = 7;
-- She went to Logan International Airport in Boston
--Time to check the phone logs again and see whos has the phoone number : (725) 555-3243
SELECT name,caller, receiver, duration FROM phone_calls,people
WHERE phone_calls.caller = people.phone_number
AND phone_number = '(725) 555-3243';
--Number belongs to Philip
