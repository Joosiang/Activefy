# DME Assignment (Physical Activity Tracker App)

The project is about a physical activity tracker app where the user can add,edit,view their activities. User can also gain points to redeem for vouchers after completing each activity.
 
## Design Process

The design is minimalistic The app is targeted for teenagers and adults who wishes to do some simple physical activity such as walking while they are on the way to work/school. 

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.

Adding an Activity
- The user will be given a form to fill up and select an activity, duration and the date they want to do it.

Editing an Activity
- The user can change the activity details and it will be updated in the Upcoming Activity page.

Upcoming Activity
- The user is able to view all the activities that is being added.

Past Activity
- The user is able to view all the past activity that they have done so far.

Rewards Station
- User can use the points accumulated to redeem discount vouchers for Starbucks, Amazon and Walmart etc.

## Features that was not added

Able to delete "Upcoming Activity" , "Past Activities"

Adding an Activity
- Show calories burned and points rewarded in the screen itself

Rewards Station
- Add more discount vouchers to the page (Only able to redeem from Starbucks)

## Technologies Used

- [Ionic](https://ionicframework.com/)
    - The project uses **Ionic** because it has UI components to build web and mobile apps and it supports frameworks like Angular as well.

- [Angular](https://angular.io/)
    - The project uses **Angular** to build pages for applications using TypeScript.


## Testing

1. Adding An Activity:
    1. Click on "Add New Activity" on "Home" page
    2. Fill in all the necessary information needed
    3. The activity should show up in the "Home" page after adding
    4. Click on the side menu bar and click "Upcoming Activities" the activity should also be added there

2. Editing An Activity
    1. Click side menu bar and click "Upcoming Activity"
    2. Click the "pencil icon" and an "Edit Activity" page should appears
    3. Change the details and see if the changes are shown in "Upcoming Activity"

3. Redeem a voucher
    1. Click on "Redeem" in Home page
    2. It should bring the user to "Reward Station"
    3. Click on the "Redeem" button beside the starbucks icon
    4. Bring the user to a "Thank you" page and shows the remaining points left

## Credits
https://ionicframework.com/docs/components

https://angular.io/guide/lazy-loading-ngmodules

https://ionicframework.com/docs/angular/navigation

https://ionicframework.com/docs/angular/storage

https://dribbble.com/shots/9990122-Activity-app

https://dribbble.com/shots/14560883-Health-Activity-Tracking-App

https://dribbble.com/shots/6302983-Vshr-d-Mobile-Design

https://dribbble.com/shots/8420817-Fitness-Companion-Mobile-App

https://dribbble.com/shots/6647150-Gamification-of-Driving-Behaviour

https://ionicframework.com/docs/angular/storage

## How to Use

1) Save it under a directory you want
2) Open Command Prompt
3) Type cd Activefy
4) After that, type ionic serve

Some additional commands if it does not work

- ionic cordova plugin add cordova-sqlite-storage
- npm install --save @ionic/storage








