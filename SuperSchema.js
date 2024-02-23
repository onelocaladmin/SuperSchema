"User": {
  "id": "U123",
  "agentId": "A123",
  "firstName": "Cam",
  "lastName": "Alot", // String
  "name": "Cam Alot", // String
  "moniker": "CamAlot", // String
  "userName": "camalot", // String
  "alternateIdentities": [ // can login as a different user (character or organization) custom identities - special user-types
    {"id": "A123",
    "firstName": "Barry",
    "lastName": "Allen",
    "name": "Barry Allen",
    "moniker": "Scarlet Speedster",
    "userName": "CrimsonKing",
    "alternateIdentities": [Agent],
    "catchphrase": "run fast", // String
    "email": "flash52@gmail.com",
    }
    ],
  "email": "camalot999@gmail.com",
  "phone": "123-456-7890",
  "address": "123 Main St.",
  "city": "Boulder",
  "state": "Co",
  "country": "USA",
  "province": "null",
  "region": "West",
  "continent": "North America",
  "planet": "Earth",
  "lv1_ecoregion:": "Great Plains",
  "lv2_ecoregion": "South Central Semi-arid Praries",
  "lv3_ecoregion": "High Plains",
  "lv4_ecoregion":"Front Range Fans",
  "zip": "94105",
  "location" "Cam's House, 123 Main St., Boulder, C0 80301", // users' current location /User/CamAlot/Location // populates as map view with pin. writes venue name and address
    "name": "Cam's House",
    "venue": "Cam's House",
    "latitude": "37.783692",
    "longitude": "-122.409972",
  "password": "password" - never stored in plain text on the server or client side - only the hash is stored on the server side and the hash is never sent to the client side - the client side sends the password to the server side and the server side hashes the password and compares it to the hash stored on the server side - if the hashes match, the user is authenticated and the user is logged in - if the hashes do not match, the user is not authenticated and the user is not logged in - the client side never knows the password or the hash of the password - the client side only knows that the user is authenticated and logged in or not authenticated and not logged in
  "refferedBy": [
    {
      "id": "U123",
      "name": "Cam Alot"
    }

  "profilePicture": "https://www.google.com"
  "backgroundPicture": "https://www.google.com"
  "description": String // "I'm a cool guy"
  "organizations": [Organization] // "hackhouse" "Organizations that the user is a part of"  /user.camalot/org.hackhouse/roles - displays camalots' roles in hackhouse. camalot/hackhouse/ceo displays camalot's hackhouse ceo role object
  "groups": [ // "Groups that the user is a part of" /camalot/boulder_producers_guild/tasks - displays camalots' tasks in boulder_producers_guild. camalot/boulder_producers_guild/task/set_up_chairs displays camalot's boulder_producers_guild set_up_chairs task object
    // ex. event production department, media department, software development department, etc
    "id": "G123",
    "name": "Boulder Producers Guild",
    "description": "Boulder Producers Guild",
    "members": [User] // "Users that are part of the group"
    "roles": [Role] // "Roles that the user has in the group"
      "id": "R123",
      "name": "CEO",
      "description": "CEO", 
      "responsibilities": "CEO",
      "tasks": [Task] // "Tasks that the user is responsible for in the role"
        "id": "T123", 
        "name": "Set up chairs",
        "summary": "Set up chairs",
        "description": "Set up chairs",
        "when": "2018-01-01T00:00:00Z - 2018-01-01T00:00:00Z",
        "workPeriods": [
          {} // "work periods that the user is working on the task"
        "dueDate": "2018-01-01T00:00:00Z",
        "priority": "high",
        "status": "active",
        "assignedTo": [User] // "user that the task is assigned to"
        "assignedBy": [User] // "user that assigned the task"
        "attachments": [String] // "attachments of the task"
        "followers": [User] // "users that are following the task"
        "comments": [Comment] // "comments that are on the task"
        "subtasks": [Task] // "subtasks that are part of the task"
        "bountyType": [cash, crypto, inGameToken, giftPoints, resource] // "type of bounty"
          "cash":
            "usd":
          "crypto":
          "inGameToken":
          "giftPoints":
          "resource":
        "bountyAmount": // "amount of bounty"
        "location": [Location] // "location of the task"
        "schedule": [Schedule] // "schedule of the task"
        "stakeholders": [User] // "users that are stakeholders of the task"
          "investors": [User] // "users that are investors of the task"
          "customers": [User] // "users that are customers of the task"
          "employees": [User] // "users that are employees of the task"
          "managers": [User] // "users that are managers of the task"
        "resources": [Resource] // "resources that are needed for the task"
        "permissions": [Permission] // "permissions that the user has for the task"
          "can edit": // "true"
          "can view": // "true"
          "can take":

      "badges": [Badge] // "Badges that the user needs for the role"

    "events": [Event] // "Events that the user is interested in, going to, or has gone to" /camalot/events - displays camalots' events. camalot/events/going displays camalots' events that he is going to. camalot/events/interested displays camalots' events that he is interested in. camalot/events/not_going displays camalots' events that he is not going to. camalot/events/viewed displays camalots' events that he has viewed. camalot/events/created displays camalots' events that he has created.
    "groups": [Group] // "Groups that the user is a part of at the event" 
        // attendees, performers, producers, hosts, volunteers, sponsors, vendors, staff, security, guests, etc
      "roles": [Role] // "Roles that the user has at the event"
          // attendee, performer, producer, host, volunteer, sponsor, vendor, staff, security, guest, etc
        "tasks": [Task] // "Tasks that the user has at the event"
          // attend, perform, check in, set up, tear down, clean up, etc
    "producing": [User] // "events that the user is producing"
    'maybeGoing": [Event] // "Events that the user is maybe going to"
    "went": [Event] // "Events that the user has gone to"
    "at": [Event] // "Events that the user is at"
    "going": [Event] // "Events that the user is going to" /camalot/events/going
    "interested": [Event] // "Events that the user is interested in"
    "notGoing": [Event] // "Events that the user is not going to"
    "viewed": [Event] // "Events that the user has viewed"
    "created": [Event] // "Events that the user has created"
        "eventId": // "E123"
        "name": // "name of the event"
        "description": // "description of the event"
    "hosting": [Event] // "Events that the user is hosting"
  "skills": [Skill] // "Skills that the user has"
    type: [programming, design, etc] // "type of skill"
  attributes: [Attribute] // "Attributes that the user has"
    physical traits: [height, weight, hair color, eye color, etc] // "Physical traits that the user has"
    personality traits: [personality, etc] // "Personality traits that the user has" 
    wealth: [cash, crypto, inGameToken, giftPoints, resource] // "Wealth that the user has"
  resources: [Resource] // "Resources that the user owns"
    asset:
      type: [cash, crypto, inGameToken, giftPoints, product, resource] // "type of asset"
        cash:
          usd:
        crypto:
        NFT
        inGameToken:
        giftPoints:
        resource:
      quantity: // "quantity of asset"
      location: [Location] // "location of asset"
      permissions: [Permission] // "permissions that the user has for the asset"
        can edit: // "true"
        can view: // "true"
        canTake: 
          user: // "true"
          org: // "true"
          group: // "true"
          badge: // "true"
          minTokenQuantity: // "true"
    services: [Service] // "Services that the user offers"
    products: [Product] // "Products that the user is selling"
  projects: [Project] // "Projects that the user is working on"
  organizations: [Organization] // "Organizations that the user is a part of"
  badges: [Badge] // "Badges that the user has"
  groups: [Group] // "Groups that the user is a part of"
  products: [Product] // "Products that the user is selling"
  memberships: [Membership] // "Memberships that the user has"
    Player: [Player] // "Player membership"
    Producer: [Producer] // "Producer membership"
    ProductMerchant: [ProductMerchant] // "ProductMerchant membership"
    ServiceProvider: [ServiceMerchant] // "ServiceProvider membership"
    orgOperator: [orgOperator] // "Organization Operator membership"
  services: [Service] // "Services that the user is offering"
  Intents: [Intent] // "Intents that the user has"
    offers: [Offer] // "Offers that the user has made"
      offerAs: [gift, loan, rent, sale, trade] // "type of offer"
      description: // "description of the offer"
      resource: [Resource] // "resource that the user is offering"
      skill: [Skill] // "skill that the user is offering"
      service: [Service] // "service that the user is offering"
      product: [Product] // "product that the user is offering"
      price: // "price of the offer"
      quantity: // "quantity of the offer"
      discount: // "discount of the offer"
        discountCode: // "quantity of the discount"
        discountType: [percentage, fixed] // "type of discount"
          discountAmount: // "amount of the discount"
          discountPercentage: // "percentage of the discount"
      conditions: [Condition] // "conditions of the offer"
        name: // "name of the condition"
        description: // "description of the condition"
        users: [User] // "users that the condition applies to"
        canView: [User] // "users that can view the offer"
        canEdit: [User] // "users that can edit the offer"
        canTake: [User] // "users that can take the offer"
        canApply: [User] // "users that can apply for the offer"
        canRent: [User, group, badgeHolder, roleHolder, ] // "users that can rent the offer"
        createdAt: String // "2018-01-01T00:00:00Z"
        updatedAt: String // "2018-01-01T00:00:00Z"
      permissions: [Permission] // "permissions that the user has for the offer"
    requests: [Request]   // "Requests that the user has made"  
      
  gratisPoints: [GratisPoints] // "Gratis points that the user has"
  posts: [Post] // "Posts that the user has made"
  comments: [Comment] // "Comments that the user has made"
  interests: [Interest] // "Interests that the user has"
  purchases: [Purchase] // "Purchases that the user has made"
  inGameTokens: [InGameToken] // "In game tokens that the user has"
  friendships: [User] // "Friends that the user has"
    type: [stranger, heard_of, close, acquaintance, related, intimate, business connection, physical, comitted_relationship, open_relationship] // "type of friend"
      view permissions: [Permission] // "Permissions that the user has"
        can view:
          physical traits: [height, weight, hair color, eye color, etc] // "Physical traits that the user can view"
          personality traits: [personality, etc] // "Personality traits that the user can view" 
          location: [Location] // "Location that the user can view"
          interests: [Interest] // "Interests that the frindship can view" 
          skills: [Skill] // "Skills that the frindship type can view"
          resources: [Resource] // "Resources that the frindship type can view"
          projects: [Project] // "Projects that the frindship type can view"
          organizations: [Organization] // "Organizations that the frindship type can view"
          groups: [Group] // "Groups that the frindship type can view"
          products: [Product] // "Products that the frindship type can view"
          services: [Service] // "Services that the frindship type can view"
          offers: [Offer] // "Offers that the frindship type can view"
          requests: [Request] // "Requests that the frindship type can view"
          gratisPoints: [GratisPoints] // "Gratis points that the frindship type can view"
          posts: [Post] // "Posts that the frindship type can view"
          comments: [Comment] // "Comments that the frindship type can view"
          purchases: [Purchase] // "Purchases that the frindship type can view"
          inGameTokens: [InGameToken] // "In game tokens that the frindship type can view"
          friendships:
            type: [stranger, heard_of, close, acquaintance, related, intimate, business connection, physical, comitted_relationship, open_relationship] 
              // "type of friendships frindship type can view"
              friends: [User] // "Friends that the frindship type can view"
          friendRequests: [User] // "Friend requests that the frindship type can view"
    quality: [admire, adore, like, dislike, trust, distrust, neutral] // "quality of friendship"
  friendRequests: [User] // "Friend requests that the user has"
    type: [stranger, heard_of, close, acquaintance, related, intimate, business connection, physical, comitted_relationship, open_relationship] // "type of friendship request"
}


organizations: [Organization] // "Organizations in the network"  organization/hackhouse/group/directors/role/ceo/tasks
    resources: [Resource] // "Resources that the Organization owns" 
    venues: [Venue] // "Venues that the Organization runs"  
      building: [Building] // "Building that the venue is in"
        room:
      name: // "name of the building"
      address: // "address of the building"
      city: // "city of the building"
      state: // "state of the building"
      country: // "country of the building"
      zip: // "zip of the building"
      latitude: // "latitude of the building"
      longitude: // "longitude of the building"
    products: [Product] // "Products that the user is selling"
    services: [Service] // "Services that the user is offering"
    groups: [Group] // "Groups that the user is a part of"
      roles: [Role] // "Roles that the user has in the group"
        responsibilities: [Task] // "Tasks that the user is responsible for in the role"
        tasks: [Task] // "Tasks that the user is working on in the role"
          name: // "name of the task"
          summary: // "summary of the task"
          description: // "description of the task"
          dueDate: // "due date of the task"
          priority: [low, medium, high] // "priority of the task"
          status: [active, inactive, completed] // "status of the task"
          assignedTo: [User] // "user that the task is assigned to"
          assignedBy: [User] // "user that assigned the task"
          attachments: [String] // "attachments of the task"
          followers: [User] // "users that are following the task"
          comments: [Comment] // "comments that are on the task"
          subtasks: [Task] // "subtasks that are part of the task"
          bountyType: [cash, crypto, inGameToken, giftPoints, resource] // "type of bounty"
            cash:
              usd:
            crypto:
            inGameToken:
            giftPoints:
            resource:
          bountyAmount: // "amount of bounty"
          
          location: [Location] // "location of the task"
          schedule: [Schedule] // "schedule of the task"
          stakeholders: [User] // "users that are stakeholders of the task"
            investors: [User] // "users that are investors of the task"
            customers: [User] // "users that are customers of the task"
            employees: [User] // "users that are employees of the task"
            managers: [User] // "users that are managers of the task"
            
          resources: [Resource] // "resources that are needed for the task"
          permissions: [Permission] // "permissions that the user has for the task"
            can edit: // "true"
            can view: // "true"
            canTake: 
              user: // "true"
              org: // "true"
              group: // "true"
              badge: // "true"
              minTokenQuantity: // "true"
        badges: [Badge] // "Badges that the user needs for the role"
          permissions: [Permission] // "Permissions that the badge grants the user"
            can edit: // "true"
            can view: // "true"
            canTake: 
              user: // "true"
              org: // "true"
              group: // "true"
              badge: // "true"
              minTokenQuantity: // "true"
          
          status: [active, inactive, completed] // "Status of the project"
          priority: [low, medium, high] // "Priority of the project"
        badges: [Badge] // "Badges that the user needs for the role"
          permissions: [Permission] // "Permissions that the badge grants the user"
            canEdit: // "true"
            canView: // "true"
            canTake: 
              tasks: [Task] // "Tasks that the user can take"
              roles: [Role] // "Roles that the user can take"
      projects: [Project] // "Projects that the user is a part of"
        type: [event, project, incident, campaign, ] // "type of project"
          event: // "event project"
        status: [active, inactive, completed] // "Status of the project"
        priority: [low, medium, high] // "Priority of the project"
        roles: [Role] // "Roles that the user has"
          responsibilities: [Task] // "Tasks that the user is responsible for"
          tasks: [Task] // "Tasks that the role is working on"
            name: // "name of the task"
            status: [active, inactive, completed] // "Status of the task"
            priority: [low, medium, high] // "Priority of the task"
}

tasks: [Task] // "Tasks that the role is working on"
  name: // "name of the task"
  AsignedTo: [User] // "user that the task is assigned to" (trusted delegate)
  Role: [Role] // "role that the task is assigned to" (responsible party)
  status: [active, inactive, completed] // "Status of the task"
  priority: [low, medium, high] // "Priority of the task"
    id: ID!
  supervisor: [role] // "role that supervises the task"
  createdAt: String
  createdBy: User
  admins: [User]
  requirements: Requirements
  title: String
  description: String
  dueDate: String
  priority: String
  status: String
  assignedTo: User
  updatedAt: String
  attachments: [String]
  followers: [User]
  comments: [Comment]
    reply: Comment
  subtasks: [Task]
  bountyType: String
      cash:
        usd:
      crypto:
      inGameToken:
      giftPoints:
      resource:
  bountyAmount: Float
  location: Location
  schedule: Schedule
  stakeholders: [User]
  resources: [Resource]
  permissions: [Permission]
    can edit:
    can view:
    canTake:
      user:
      org:
      group:
      badge:
      minTokenQuantity:
badges: [Badge] // "Badges that the user needs for the task"
  permissions: [Permission] // "Permissions that the user has"
    can edit: // "true"
    can view: // "true"
    canTake: 
      tasks: [Task] // "Tasks that the user can take"
      roles: [Role] // "Roles that the user can take"
}

intentMatch: [IntentMatch] // "Intent matches that trigger draft agreement with commitments. when users accept, the agreement is 
//created, the commitments are executed and the resources are transfered. offers are automatically agreed to by the offerer."
  type: offer, request
  resource: Resource
    spec.
  description: String
  giverCommitment
    offeredAs: gift, loan, rent, sale, trade
  recieverCommitment
    requestedAs: gift, loan, rent, sale, trade
  user: User
  createdAt: String
  updatedAt: String

agreement
  id: ID!
  intentMatch: IntentMatch
  giverCommitment
    offeredAs: gift, loan, rent, sale, trade
  recieverCommitment
    requestedAs: gift, loan, rent, sale, trade
  user: User
  createdAt: String
  updatedAt: String

commitment

economicEvent: // "economic events that are triggered by agreements- bob transfered car to alice"
  id: ID!
  agreement: Agreement
  giverCommitment
    offeredAs: gift, loan, rent, sale, trade
  recieverCommitment
    requestedAs: gift, loan, rent, sale, trade
  user: User
  createdAt: String
  updatedAt: String

Condition {
  id: ID!
  name: String
  AppliedToObjectId: ID!
  description: String
  users: [User]
  canView: [User]
  canEdit: [User]
  canTake: [User]
  canApply: [User]
  canRent: [User, group, badgeHolder, roleHolder, ]
  createdAt: String
  updatedAt: String
}

Action: // "actions that can be taken on objects"
  dropoff
  pickup
  consume
  use
  work
  cite
  produce
  accept
  modify
  pass
  fail
  deliver-service
  transfer-all-rights
  transfer-custody
  transfer
  move
  raise
  lower

Event {
  id: ID! // "E123"
  name: String // "Hackathon"
  description: String // "A hackathon"
  location: String // "Boulder, CA"
  venue: [Venue] // "Cam's House"
  startDatetime: String // "2018-01-01T00:00:00Z"
  endDatetime: String // "2018-01-01T00:00:00Z"
  repeat: Boolean // "false"
  repeatDatetimeRanges: [String] // "[]"
  attendees: [User] // "[users who are attending (has tickets)]"
  organizer: User // "Cam Alot"
  creator: User // "Cam Alot"
  host: User // "Cam Alot"
  coHosts: User // "Cam Alot"
  tickets: [Ticket] // "Tickets that are available for the event"
    type: [free, paid, donation] // "type of ticket"
    name: // "name of the ticket"
    description: // "description of the ticket"
    transferable: // "true"
      requiresApproval: // "true"
    price: // "price of the ticket"
    quantity: // "quantity of the ticket"
    discount: // "discount of the ticket"
      discountCode: // "quantity of the discount"
      discountType: [percentage, fixed] // "type of discount"
        discountAmount: // "amount of the discount"
        discountPercentage: // "percentage of the discount"
    users: [User] // "users that have the ticket"
  createdAt: String // "2018-01-01T00:00:00Z"
  updatedAt: String // "2018-01-01T00:00:00Z"
  going: [Event] // "users planning to go"
  hasTickets: [User] // "users who have tickets"
  interested: [User] // "users maybeGoing"
  viewed: [Event] // "Users that have viewed the event"
  created: [Event] // "User that created the event"

  location: [Location] // "Location of the event"
    address: // "address of the event"
    venue: [Venue] // "Venues that the user is attending"
      building: [Building] // "Building that the venue is in"
        floor: [floor] // "floor that the venue is on"
          room: [room] // "room that the venue is in"
            name: // "name of the room"
            description: // "description of the room"
            capacity: // "capacity of the room"
            resources: [Resource] // "resources that are in the room"
    "mocked":false,
    "timestamp":1568615012425,
    "coords":{  
        "speed":0,
        "heading":0,
        "accuracy":16,
        "altitude":-30.299999237060547,
        "longitude":90.4110053,
        "latitude":23.7732067


permissions: [Permission] // "permissions attached to the object that determine who can do what with the object"
  id: ID!
  permittedObject_id: // "ID of the object"
  canEdit: // "true"
    users: [User] // "Users that can edit the object"
    orgs: [Organization] // "Organizations that a user must belong to in order to edit the object"
    groups: [Group] // "Groups whose members can edit the object"
    badges: [Badge] // "Badges that allow the badgeholder to edit the object"
    assets: [Asset] // "Assets that allow the assetholder to edit the object"
    minTokenQuantity: // "minimum token quantity that can edit the object"
    roles: [Role] // "Roles that can edit the object"
    skills: [Skill] // "Skills that can edit the object"
    ownsResources: [Resource] // "resources users must own to edit the object"
  cannotEdit: // "true"
  canView: // "true"
  cannotView: // "true"
  canTake: // "true"
  cannotTake: // "true"
  canComment: // "true"
  cannotComment: // "true"
  }

  if canView 
  + this.viewtemplate



Skill {
  id: ID! // "S123"
  name: String // "Programming"
  description: String // "Programming"
  users: [User] // "Users that have this skill"
  createdAt: String // "2018-01-01T00:00:00Z"
  updatedAt: String // "2018-01-01T00:00:00Z"
}


Resource {
  id: ID! // "R123"
  type:
    
  title: String // "laptop"
  description: String // "A laptop"
  category: String // "Electronics"
  subcategory: String // "Computers"
  status: String // "Available"
  location: Location // "Boulder, CA"
  images: [String] 
  tags: [String]
  owners: [User] // "Users that own this resource" []
  createdAt: String
  updatedAt: String
}

Venue {
  name: String // "Cam's House"
  type: String // "School"
  owner: 
    type:
      [User, org, group] // "Cam Alot" 
  address: String // "123 Main St."
  city: String // "Boulder"
  state: String // "CA"
  country: String // "USA"
  zip: String // "94105"
  latitude: Float // "37.783692"
  longitude: Float // "-122.409972"
}

Project {
  id: ID! // "P123"
  name: String // "app development"
  description: String // "build the app"
  tasks: [Task] // "Tasks that are part of this project"
  members: [User] // "Users that are part of this project"
  createdAt: String // "2018-01-01T00:00:00Z"
  updatedAt: String // "2018-01-01T00:00:00Z"
}

Comment {
  id: ID!
  parentObject: id
  parentComment: id
  children: [Comment]
  content: String
  user: User
  createdAt: String
  updatedAt: String
  }
Role {
  id: ID!
  name: String // "name of the role"
  roleStart: String // "2018-01-01T00:00:00Z" // datetime when the role starts
  roleEnd: String // "2018-01-01T00:00:00Z" // datetime when the role ends
  clonedFrom: Role // "role that this role was cloned from"
  users: [User] // "Users that hold the role"
  description: String // "description of the role"
  responsibilities: string // "responsibilities of the role"
  tasks: [Task] // "Tasks that the role is working on"
  comments: [Comment] // "Comments that are on the role"
  taskHistory: [Task] // "Tasks that the role has completed"
  createdAt: String
  updatedAt: String
}

Badge {
  id: ID!
  name: String
  description: String
  users: [User]
  createdAt: String
  updatedAt: String
}

Group {
  id: ID!
  name: String
  description: String
  members: [User]
  createdAt: String
  updatedAt: String
}

Product {
  id: ID!
  name: String
  description: String
  price: Float
  owner: User
  createdAt: String
  updatedAt: String
}

Service {
  id: ID!
  name: String
  description: String
  price: Float
  provider: User
  createdAt: String
  updatedAt: String
}

Offer {
  id: ID!
  description: String
  product: Product
  service: Service
  createdAt: String
  updatedAt: String
}

Request {
  id: ID!
  description: String
  user: User
  createdAt: String
  updatedAt: String
}

GratisPoints {
  id: ID!
  user: User
  source: array // "comma string of "[object_id]"s that the point has been given to "_[ID]"" who gave it there"
  points: Int
  createdAt: String
  updatedAt: String
}

Post {
  id: ID!
  content: String
  user: User
  comments: [Comment]
  createdAt: String
  updatedAt: String
}

Interest {
  id: ID!
  name: String
  users: [User]
  createdAt: String
  updatedAt: String
}

Purchase {
  id: ID!
  product: Product
  buyer: User
  createdAt: String
  updatedAt: String
}

InGameToken {
  id: ID!
  user: User
  tokens: Int
  createdAt: String
  updatedAt: String
}
