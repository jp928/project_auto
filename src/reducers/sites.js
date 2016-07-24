const initState = { sites:[
		  {
		    "id": 1,
		    "siteName": "SurferMag",
		    "siteUrl": "www.surfermag.com",
		    "description": "This is the description for SurferMag",
		    "categoryIds": [
		      2
		    ]
		  },
		  {
		    "id": 2,
		    "siteName": "Ebay",
		    "siteUrl": "www.ebay.com.au",
		    "description": "This is the description for ebay",
		    "categoryIds": [
		      1
		    ]
		  },
		  {
		    "id": 3,
		    "siteName": "Robs UI Tips",
		    "siteUrl": "www.awesomeui.com.au",
		    "description": "This is the description for the best site in the world. It is the best:)",
		    "categoryIds": [
		      4, 3
		    ]
		  },
		  {
		    "id": 4,
		    "siteName": "Table Tennis Tips - How to not come runners up",
		    "siteUrl": "www.ttt.com",
		    "description": "This is the description for Table Tennis Tips",
		    "categoryIds": [
		      1, 2, 3, 4
		     ]
		  }
		]};


export default function(state = initState, action) {
	switch(action.type) {
		case 'SEARCH':
			let result = initState.sites;

			if(action.keyword.length >= 2) {
					result = state.sites.filter((site) => {
					console.log(site);
					if(site.siteName.toLowerCase().indexOf(action.keyword.toLowerCase()) > -1){
						return true;
					} else if (site.description.toLowerCase().indexOf(action.keyword.toLowerCase()) > -1) {
						return true;
					} else if (site.siteUrl.toLowerCase().indexOf(action.keyword.toLowerCase()) > -1) {
						return true;
					}

					return false;
				});
			}

			return Object.assign({}, state, {sites: result});
		break;
		default:
			return state;
	}	
}
