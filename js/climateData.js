const rawData = [{
	"activity": "infant",
	"start": "1988-09-27",
	"end": "1989-09-27",
	"location": "Australia",
	"tags": ["<18"],
	"skills": [],
	"schedule": 1.0
},

{
	"activity": "todler",
	"start": "1989-09-27",
	"end": "1990-09-27",
	"location": "Australia",
	"tags": ["<18"],
	"skills": [],
	"schedule": 1.0
},

{
	"activity": "todler",
	"start": "1990-09-27",
	"end": "1991-09-27",
	"location": "Sri Lanka",
	"tags": ["<18"],
	"skills": [],
	"schedule": 1.0
},

{
	"activity": "infant",
	"start": "1991-09-27",
	"end": "1993-09-27",
	"location": "New Zealand",
	"tags": ["<18"],
	"skills": [],
	"schedule": 1.0
},

{
	"activity": "primary school",
	"start": "1993-09-27",
	"end": "2001-12-31",
	"location": "New Zealand",
	"tags": ["<18"],
	"skills": [],
	"schedule": 1.0
},

{
	"activity": "high school",
	"start": "2002-01-01",
	"end": "2006-12-31",
	"location": "New Zealand",
	"tags": ["<18"],
	"skills": [],
	"schedule": 1.0
},

{
	"activity": "bachelors",
	"start": "2007-02-10",
	"end": "2007-11-09",
	"location": "New Zealand",
	"tags": ["university", "bachelors", "engineering"],
	"skills": ["mechanical engineering"],
	"schedule": 1.0
},

{
	"activity": "bachelors",
	"start": "2008-02-10",
	"end": "2008-11-09",
	"location": "New Zealand",
	"tags": ["university", "bachelors", "engineering"],
	"skills": ["mechanical engineering"],
	"schedule": 1.0
},

{
	"activity": "bachelors",
	"start": "2009-01-10",
	"end": "2009-12-10",
	"location": "Canada",
	"tags": ["university", "bachelors", "engineering"],
	"skills": ["mechanical engineering"],
	"schedule": 1.0
},

{
	"activity": "bachelors",
	"start": "2010-02-10",
	"end": "2010-11-09",
	"location": "New Zealand",
	"tags": ["university", "bachelors", "engineering"],
	"skills": ["mechanical engineering"],
	"schedule": 1.0
},

{
	"activity": "masters",
	"start": "2011-09-21",
	"end": "2012-06-01",
	"location": "Switzerland",
	"tags": ["university", "masters", "engineering"],
	"skills": ["energy engineering", "nanotechnology", "biomedical engineering"],
	"schedule": 1.0
},

{
	"activity": "pjdobbie engineering",
	"start": "2010-11-10",
	"end": "2012-06-01",
	"location": "New Zealand",
	"tags": ["engineering", "company", "consultant"],
	"skills": ["mechanical engineering", "prototyping", "business", "start-up"],
	"schedule": 1.0
},

{
	"activity": "greenTEG",
	"start": "2012-09-01",
	"end": "2013-04-01",
	"location": "Switzerland",
	"tags": ["engineering", "masters", "engineering"],
	"skills": [""],
	"schedule": 1.0
},

{
	"activity": "Xingyu Lighting",
	"start": "2013-04-01",
	"end": "2013-07-01",
	"location": "China",
	"tags": ["engineering", "masters", "engineering"],
	"skills": [""],
	"schedule": 1.0
},

{
	"activity": "masters",
	"start": "2013-08-01",
	"end": "2014-02-01",
	"location": "Switzerland",
	"tags": ["university"],
	"skills": [""],
	"schedule": 0.2
},

{
	"activity": "HiLo",
	"start": "2014-06-01",
	"end": "2017-12-01",
	"location": "Switzerland",
	"tags": ["architecture"],
	"skills": [""],
	"schedule": 0.8
},

{
	"activity": "CKAA Chairman",
	"start": "2013-11-01",
	"end": "2014-11-01",
	"location": "Switzerland",
	"tags": ["organisations"],
	"skills": [""],
	"schedule": 0.2
},

{
	"activity": "Adaptive Systems Lab",
	"start": "2018-01-01",
	"end": "2018-09-01",
	"location": "Switzerland",
	"tags": ["architecture"],
	"skills": [""],
	"schedule": 0.2
},

{
	"activity": "Coolbit",
	"start": "2018-12-01",
	"end": "2019-12-01",
	"location": "Switzerland",
	"tags": ["software"],
	"skills": [""],
	"schedule": 1.0
},

{
	"activity": "Surfing",
	"start": "2018-10-01",
	"end": "2018-12-01",
	"location": "Philippines",
	"tags": ["travel", "surfing", "yoga"],
	"skills": ["surfing"],
	"schedule": 1.0
},

{
	"activity": "Hitchhiking",
	"start": "2009-05-20",
	"end": "2009-09-01",
	"location": "Canada",
	"tags": ["travel", "hitchhiking"],
	"skills": [""],
	"schedule": 1.0
},

{
	"activity": "South America",
	"start": "2011-04-27",
	"end": "2011-05-10",
	"location": "Argentina",
	"tags": ["travel"],
	"skills": ["spanish"],
	"schedule": 1.0
},

{
	"activity": "South America",
	"start": "2011-05-10",
	"end": "2011-06-15",
	"location": "Chile",
	"tags": ["travel"],
	"skills": ["spanish"],
	"schedule": 1.0
},

{
	"activity": "South America",
	"start": "2011-06-15",
	"end": "2011-07-15",
	"location": "Bolivia",
	"tags": ["travel"],
	"skills": ["spanish"],
	"schedule": 1.0
},

{
	"activity": "South America",
	"start": "2011-07-15",
	"end": "2011-08-20",
	"location": "Peru",
	"tags": ["travel"],
	"skills": ["spanish"],
	"schedule": 1.0
},

{
	"activity": "Burning Man",
	"start": "2011-08-20",
	"end": "2011-09-05",
	"location": "USA",
	"tags": ["travel", "burning man"],
	"skills": [""],
	"schedule": 1.0
},

{
	"activity": "Europe Trip",
	"start": "2012-06-01",
	"end": "2012-07-01",
	"location": "Hungary",
	"tags": ["travel"],
	"skills": [""],
	"schedule": 1.0
},

{
	"activity": "China",
	"start": "2013-07-01",
	"end": "2013-08-25",
	"location": "China",
	"tags": ["travel"],
	"skills": [""],
	"schedule": 1.0
},

{
	"activity": "North Korea",
	"start": "2013-08-25",
	"end": "2012-08-27",
	"location": "North Korea",
	"tags": ["travel"],
	"skills": [""],
	"schedule": 1.0
},

{
	"activity": "The Journey",
	"start": "2012-07-02",
	"end": "2012-08-10",
	"location": "England",
	"tags": ["university"],
	"skills": [""],
	"schedule": 1.0
},

{
	"activity": "Spanish Trip",
	"start": "2014-02-02",
	"end": "2014-03-10",
	"location": "Spain",
	"tags": ["travel"],
	"skills": [""],
	"schedule": 1.0
}

]