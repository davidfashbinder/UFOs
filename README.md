# UFO Finder Website

## Overview of Project

The purpose of this analysis is to examine the new "UFO Finder" website and determine its usability for filtering data on UFO sightings.  We will also recommend two functional improvements that can be made to make accessing and filtering the data easier for users.

### Results 

### The Filter Boxes

![Filter Boxes](https://github.com/davidfashbinder/UFOs/blob/main/filters.png?raw=true)

We can filter the data by any, or all, of the following:

-Date of Sighting
-City 
-State
-Country
-Reported shape of the UFO

Let's filter by city - so we can see how many UFO sightings have occurred in Benton, Arkansas.  Simply type "benton" into the City input box and tab or click out of it.  

![Filter City Benton](https://github.com/davidfashbinder/UFOs/blob/main/filter_city.png?raw=true)

The table immediately filters itself to display the one - and only - reported sighting in Benton, Arkansas.  

![City Data](https://github.com/davidfashbinder/UFOs/blob/main/city_data.png?raw=true)

What about my birthday?  Let's clear the filter by erasing 'benton' from the City input box, and putting the date '1/23/2010' in the Date box.  Make sure to use the MM/DD/YYYY format, and click or tab out of the box to register the change.

![Filter Date](https://github.com/davidfashbinder/UFOs/blob/main/filter_date.png?raw=true)

Bummer!  The data does not capture any sightings on my birthday in 2010.  

![Date Data](https://github.com/davidfashbinder/UFOs/blob/main/date_data.png?raw=true)

We've been hearing reports of strange triangle objects flying around in California.  Let's filter the data to see how many times this has been reported.

![Filter State](https://github.com/davidfashbinder/UFOs/blob/main/filter_state_shape.png?raw=true)

We have to use the abbreviation for states, so input 'ca' for California, and 'triangle' for shape.  Register the change with the table and....

![California Triangles](https://github.com/davidfashbinder/UFOs/blob/main/state_shape_data.png?raw=true)

We see 7 reported triangle sightings in the California skies!  Watch out!


### Summary Recommendations

While very sleek, this website's table filtering design has one large drawback - it's too difficult to use without knowing what you're looking for. You need to know the spelling of the city, the abbreviation used for the state and country, and the shapes available to filter.  

One recommendation we can make to improve usability is to add drop-down menus to each input box.  This will allow users to easily see the options for filtering each field.  It will also create a cleaner listening event, since you can trigger the filter based on the selection of the drop down, rather than hoping the user registers the change event by clicking away from the box or tabbing out.  

There is also a limit to the number of characters in the comments section, so adding functionality in order to 'see more...' of the comments through a hyperlink may be useful to someone who wants the full story of a particular sighting.  This would be tricky, as we'd have to create a function that appends the link to the end of the value, but it would be very useful.
 

