

Vue.component("navigation-bar", {
  
});

new Vue({
  el: "#Header",
  template: `
 
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style="background-color: #fd792b!important;" id="mainNav">
        <a class="navbar-brand" href="main.html">
            <img class="img-fluid d-inline-block align-top" src="imglogo2017.png" width="100" height="100" alt="#">
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav navbar-sidenav" id="exampleAccordion" style="top: 4px; background-color: #fbc134!important;">
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
                    <a style="color: black" class="nav-link" href="main.html">
                        <i class="fa fa-fw fa fa-university"></i>
                        <span class="nav-link-text">Bank Management</span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
                    <a style="color: black" class="nav-link" href="Entry.html">
                        <i class="fa fa-fw fa fa-exchange"></i>
                        <span class="nav-link-text">Entries</span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                    <a style="color: black" class="nav-link" href="AccountSettings.html">
                        <i class="fa fa-align-justify"></i>
                        <span class="nav-link-text">Accounts Setting</span>
                    </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                    <a style="color: black" class="nav-link" href="tables.html">
                        <i class="fa fa-fw fa-table"></i>
                        <span class="nav-link-text">Report</span>
                    </a>
                </li>
    
            </ul>
            <ul style="background-color: #fd792b!important;" class="navbar-nav sidenav-toggler">
                <li class="nav-item">
                    <a style="color: black" class="nav-link text-center" id="sidenavToggler">
                        <i class="fa fa-fw fa-angle-left"></i>
                    </a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
             
    
                <li class="nav-item">
                    <a style="color: black" class="nav-link" data-toggle="modal" data-target="#exampleModal">
                        <i class="fa fa-fw fa-sign-out"></i>Log Out</a>
                </li>
            </ul>
        </div>
    </nav>
    `
});
new Vue({
    el: "#Banks",
    data: {
        name:'patrick',
            divisions: [
                {"name": "TACCP - Texicon Agri ventures Corp.Crop Protection"},
                {"name": "TACAF - Texicon Agri ventures Corp.Aquatic Feeds"},
                {"name": "TACGT - Texicon Agri ventures Corp.Grains Trading"},
                {"name": " FAAS Corp"},
                {"name": " Polara Chemical Corporation"},
                {"name": "Shrimp Bucket"}
            ]
        
 
    }
})