# 👋 Junior Developer Evaluation 👋

by Annette Le Sage 
version 1.0 (updated 22/2/24)

## What went well?

I was pleased to have been able to create a final product which, using an iPad Pro, mostly reflects the visual design of the prototype provided. Despite having only very limited experience of using a JavaScript charting library, I was able to select Chart.js as a resource and learn how to use it to the extent that I could implement functioning charts. Having been teaching myself Vue.js over the past month, I was happy to have been able to use my understanding to create the structure and features of the application.

## What did you enjoy?

I enjoyed being able to use what I have been learning in Vue to fulfil the majority of the requirements of the task. The experience has helped me to better understand features of Vue and find out more about the differences between Vue and React, which I am more familiar with. Creating the functionality for populating the charts and updating them dynamically was really interesting and it was rewarding to see the results. As someone who really likes CSS and frontend design, it was great to be able to use my CSS skills to create the page.

## Where was the challenge in the task?

I found the biggest challenge to be fitting the charts into the page with their specified pixel sizes, while also making the page responsive and usable in different devices.

Having used stacked bar charts, I struggled to find a good way to either define the height of the chart or add a title to the top of each bar. My method of only displaying the first data label and moving it above each bar did not seem to be a great solution. I wondered it if might have been preferable to create 4 different charts with the titles above each chart and then hide the legend for all except the top chart. This method might have also opened up the option to define a fixed pixel height for the chart as specified, which I did not find an effective solution for.

I did not have enough time to research a method for putting the call data in the centre of the donut chart. I would have liked to experiment with implementing this, given more time, as well as updating the data in the donut when a user clicks the donut, as I had done for the charts.

## What learnings will you carry forward?

It has been really useful to have the opportunity to use Chart.js and explore its potential and I feel that I have really developed my understanding of what can be achieved with charting libraries. I have been thinking that it might be useful in a similar task to consider any defined criteria as a priority in implementing features and to design the layout around those, rather than trying to fit the features into a pre-designed layout.

## What might you do differently next time as well as any other reflections you would like to share.

If I were to take on a similar task again, I would research and find examples of good practice for the best way to implement a responsive layout with fixed pixel size criteria for elements, images or charts. Being used to creating responsive web pages with responsive elements and rem pixel sizes, I realised I would need to think differently about the page layout.

I was unsure about whether using media queries would be acceptable to change font and chart sizes for devices other than the iPad Pro it is intended for. If so, I might have defined root pixel sizes to meet the criteria and then used rems in media queries for larger or smaller screen sizes. Alternatively, if an example of good practice in an organisation was available for reference, I would seek to understand the approach used and apply it to my practice.

Because I have not been using Vue.js for long and have only previously briefly experimented with simple implementation of a charting library, I saw the task as a learning opportunity. For this reason, I did spend some additional time researching before starting and while doing the task. The Vue Mastery courses 'Vue for React Developers' were very useful and there is excellent documentation available both for Vue and Chart.js, both of which I found to be fantastic resources.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
### Preview Production build

```sh
npm run preview
```
