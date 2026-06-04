// Generated from packages/blog-kit/src/projects.js. Run "node scripts/blogs.mjs sync-projects" after editing the global catalog.
const projectsData = [
  {
    "key": "robot-ric",
    "title": "Robot Ric",
    "description": "My Book Series about a robot who learns about the world and humanity",
    "url": "https://robotric.org/",
    "imgSrc": "https://robotric.org/lp.webp",
    "category": "story",
    "tags": [
      "robotric",
      "books",
      "story"
    ],
    "ecosystemGroups": [
      "robotric",
      "story-geography",
      "education"
    ],
    "mapRequests": [
      {
        "id": "robotric-story-places",
        "datasetId": "robotric:story-places",
        "label": "Story place anchors",
        "status": "requested",
        "relation": "requests",
        "groups": [
          "robotric",
          "story-geography",
          "education"
        ],
        "features": [
          "api-request-needed",
          "story-place-grounding",
          "tst-records",
          "future-map-layer"
        ],
        "reason": "Create a reusable story/location API so Robotric stories can ground places, realms, lessons, and map embeds.",
        "dataset": {
          "id": "robotric:story-places",
          "title": "Robotric Story Places",
          "blog": "",
          "mapPath": "",
          "endpoint": "",
          "status": "requested",
          "provider": "Robotric story/location API requested",
          "source": "Future story, project, and worldbuilding place anchors",
          "groups": [
            "robotric",
            "story-geography",
            "education"
          ],
          "features": [
            "api-request-needed",
            "story-place-grounding",
            "tst-records"
          ]
        },
        "datasetTitle": "Robotric Story Places",
        "endpoint": "",
        "blog": "",
        "mapPath": "",
        "mapUrl": ""
      }
    ]
  },
  {
    "key": "bev",
    "title": "Bev",
    "description": "A Bar Discovery App that helps you find the perfect Place To drink with Friends!",
    "url": "https://www.bev.cool",
    "imgSrc": "https://www.bev.cool/BEV.svg",
    "category": "app",
    "tags": [
      "bars",
      "local-discovery",
      "social"
    ],
    "ecosystemGroups": [
      "bev",
      "local-discovery",
      "social-places"
    ],
    "mapRequests": [
      {
        "id": "bev-venue-pois",
        "datasetId": "bev:venue-pois",
        "label": "Venue POI API",
        "status": "requested",
        "relation": "requests",
        "groups": [
          "bev",
          "local-discovery",
          "social-places"
        ],
        "features": [
          "api-request-needed",
          "venue-clustering",
          "place-reviews",
          "safe-social-routing",
          "reviews",
          "rss-place-feed"
        ],
        "reason": "Create the canonical venue/place API that BEV and the blogs can reuse for nightlife, local discovery, and social place posts.",
        "dataset": {
          "id": "bev:venue-pois",
          "title": "BEV Venue POIs",
          "blog": "",
          "mapPath": "",
          "endpoint": "",
          "status": "requested",
          "provider": "BEV + OpenStreetMap venue provider requested",
          "source": "Future bar, nightlife, restaurant, and local social venue data",
          "groups": [
            "bev",
            "local-discovery",
            "social-places"
          ],
          "features": [
            "api-request-needed",
            "venue-clustering",
            "place-reviews",
            "safe-social-routing"
          ]
        },
        "datasetTitle": "BEV Venue POIs",
        "endpoint": "",
        "blog": "",
        "mapPath": "",
        "mapUrl": ""
      }
    ]
  },
  {
    "key": "legelet",
    "title": "Legelet",
    "description": "A platform that connects legal professionals with clients seeking legal services, providing a seamless experience for both parties.",
    "url": "https://www.leopiolet.com/",
    "imgSrc": "https://www.leopiolet.com/TTP.png",
    "category": "legal",
    "tags": [
      "legal",
      "marketplace",
      "services"
    ]
  },
  {
    "key": "quantum-cyber-solutions",
    "title": "Quantum Cyber Solutions",
    "description": "A company to further the research of quantum computing and its applications in cyber security and humanity",
    "url": "https://quantumcybersolutions.com",
    "imgSrc": "https://www.quantumcybersolutions.com/QCS-logo.webp",
    "category": "company",
    "tags": [
      "quantum",
      "cybersecurity",
      "research"
    ]
  },
  {
    "key": "opt",
    "title": "OPT",
    "description": "A service that ships packages by sending  them to space letting them float then precisely dropping down to earth using the earths rotation, and gravity to cover the transportation energy.",
    "url": "https://quantumcybersolutions.com/OPD",
    "imgSrc": "https://www.cdqcs.com/OPD/header.webp",
    "category": "transportation",
    "tags": [
      "space",
      "logistics",
      "transportation"
    ]
  },
  {
    "key": "mqc",
    "title": "MQC",
    "description": "A Biological Mushroom substrate track for quantum computations, blending thermodynamics, with quantum computation, utalizing the quantum dots of the mushrooms, and using love and trust to glue our conclusions together",
    "url": "https://quantumcybersolutions.com/MQC",
    "imgSrc": "https://www.quantumcybersolutions.com/MCD/2.webp",
    "category": "research",
    "tags": [
      "mushrooms",
      "quantum",
      "biology"
    ]
  },
  {
    "key": "ospp",
    "title": "OSPP",
    "description": "Democratizing drug discovery through open collaboration, inspired by successful AI communities like Hugging Face. Together, were building a future where medicine development is transparent, accessible, and community-driven.",
    "url": "https://www.quantumcybersolutions.com/LifeScience#OSPPS",
    "imgSrc": "https://www.quantumcybersolutions.com/LifeScience/background.webp",
    "category": "life-science",
    "tags": [
      "open-science",
      "medicine",
      "collaboration"
    ]
  }
]

export default projectsData
