# AX Table

AX Table is a simple jQuery plugin that make is it so easy to build a responsive table based on this trick on css tricks website
[Responsive Table Article](http://css-tricks.com/responsive-data-tables/)


## Setup

### FIRST 
Add data-axTable-title in th tag inside thead and add the value that you want to appear on responsive layout
``` html
    <table>
      <thead>
        <tr>
          <th data-axTable-title="Header">Table Header</th>
          <th data-axTable-title="Header">Table Header</th>
          <th data-axTable-title="Header">Table Header</th>
          <th data-axTable-title="Header">Table Header</th>
          <th data-axTable-title="Header">Table Header</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Value</td>
          <td>Value</td>
          <td>Value</td>
          <td>Value</td>
          <td>Value</td>
        </tr>
        <tr>
          <td>Another Value</td>
          <td>Another Value</td>
          <td>Another Value</td>
          <td>Another Value</td>
          <td>Another Value</td>
        </tr>
      </tbody>
    </table>
```

### Second 
Include the jQuery library and AX Table plugin files in your webpage (preferably at the bottom of the page, before the closing BODY tag):


```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script src="jquery.axTable.js"></script>
<script>

  $("table").axTable();

</script>
```