export const ProjectTable = [
  {
    id: 1,
    user_id: 101,
    name: "Downtown Office Renovation",
    address: "123 Main St, Springfield, IL",
    total_project_value: 150000.0,
    total_billed_to_date_customer: 85000.0,
    total_billed_to_date_subs: 60000.0,
    is_active: true,
  },
  {
    id: 2,
    user_id: 102,
    name: "Lakeside Villa Construction",
    address: "456 Lakeview Dr, Madison, WI",
    total_project_value: 320000.0,
    total_billed_to_date_customer: 200000.0,
    total_billed_to_date_subs: 175000.0,
    is_active: true,
  },
  {
    id: 3,
    user_id: 103,
    name: "Warehouse Expansion",
    address: "789 Industrial Blvd, Dallas, TX",
    total_project_value: 275000.0,
    total_billed_to_date_customer: 125000.0,
    total_billed_to_date_subs: 90000.0,
    is_active: false,
  },
  {
    id: 4,
    user_id: 104,
    name: "School Gym Upgrade",
    address: "321 School St, Baton Rouge, LA",
    total_project_value: 98000.0,
    total_billed_to_date_customer: 45000.0,
    total_billed_to_date_subs: 32000.0,
    is_active: true,
  },
  {
    id: 5,
    user_id: 105,
    name: "Suburban Housing Development",
    address: "852 Maple Ave, Denver, CO",
    total_project_value: 500000.0,
    total_billed_to_date_customer: 300000.0,
    total_billed_to_date_subs: 265000.0,
    is_active: false,
  },
  {
    id: 6,
    user_id: 106,
    name: "Medical Center Buildout",
    address: "159 Health Way, Austin, TX",
    total_project_value: 410000.0,
    total_billed_to_date_customer: 290000.0,
    total_billed_to_date_subs: 250000.0,
    is_active: true,
  },
  {
    id: 7,
    user_id: 107,
    name: "Shopping Mall Facade Remodel",
    address: "951 Commerce Blvd, Phoenix, AZ",
    total_project_value: 225000.0,
    total_billed_to_date_customer: 180000.0,
    total_billed_to_date_subs: 120000.0,
    is_active: false,
  },
  {
    id: 8,
    user_id: 108,
    name: "University Lab Addition",
    address: "741 College Rd, Ann Arbor, MI",
    total_project_value: 375000.0,
    total_billed_to_date_customer: 250000.0,
    total_billed_to_date_subs: 200000.0,
    is_active: true,
  },
  {
    id: 9,
    user_id: 109,
    name: "Luxury Condo Tower",
    address: "369 Skyline Ave, Miami, FL",
    total_project_value: 800000.0,
    total_billed_to_date_customer: 610000.0,
    total_billed_to_date_subs: 550000.0,
    is_active: true,
  },
  {
    id: 10,
    user_id: 110,
    name: "Public Library Renovation",
    address: "222 Book Ln, Portland, OR",
    total_project_value: 120000.0,
    total_billed_to_date_customer: 90000.0,
    total_billed_to_date_subs: 70000.0,
    is_active: false,
  },
];

///////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////
////////////////////////////////
//////////////////////////////
////////////////////////////
//////////////////////////
////////////////////////
//////////////////////
////////////////////
//////////////////
////////////////
//////////////
////////////
//////////
////////
//////
////
//

export const TaskTable = [
  // Project 1
  {
    id: 1,
    project_id: 1,
    description: "Demo interior walls",
    quantity: 50,
    unit_cost: 25.0,
    total_amount: 1250.0,
    assigned_sub_id: 201,
    assigned_percent: 100,
    status: "completed",
  },
  {
    id: 2,
    project_id: 1,
    description: "Install drywall",
    quantity: 200,
    unit_cost: 15.0,
    total_amount: 3000.0,
    assigned_sub_id: 202,
    assigned_percent: 100,
    status: "approved",
  },
  {
    id: 21,
    project_id: 1,
    description: "Install ceiling tiles",
    quantity: 300,
    unit_cost: 4.5,
    total_amount: 1350.0,
    assigned_sub_id: 221,
    assigned_percent: 80,
    status: "assigned",
  },
  {
    id: 22,
    project_id: 1,
    description: "Electrical rewiring",
    quantity: 100,
    unit_cost: 60.0,
    total_amount: 6000.0,
    assigned_sub_id: 222,
    assigned_percent: 100,
    status: "pending_approval",
  },

  // Project 2
  {
    id: 3,
    project_id: 2,
    description: "Excavate foundation",
    quantity: 30,
    unit_cost: 100.0,
    total_amount: 3000.0,
    assigned_sub_id: 203,
    assigned_percent: 100,
    status: "completed",
  },
  {
    id: 4,
    project_id: 2,
    description: "Pour concrete slab",
    quantity: 40,
    unit_cost: 120.0,
    total_amount: 4800.0,
    assigned_sub_id: 204,
    assigned_percent: 100,
    status: "approved",
  },
  {
    id: 23,
    project_id: 2,
    description: "Install roof shingles",
    quantity: 120,
    unit_cost: 35.0,
    total_amount: 4200.0,
    assigned_sub_id: 223,
    assigned_percent: 100,
    status: "approved",
  },
  {
    id: 24,
    project_id: 2,
    description: "Install exterior siding",
    quantity: 200,
    unit_cost: 25.0,
    total_amount: 5000.0,
    assigned_sub_id: 224,
    assigned_percent: 60,
    status: "assigned",
  },

  // Project 3
  {
    id: 5,
    project_id: 3,
    description: "Install shelving",
    quantity: 60,
    unit_cost: 55.0,
    total_amount: 3300.0,
    assigned_sub_id: 205,
    assigned_percent: 100,
    status: "assigned",
  },
  {
    id: 6,
    project_id: 3,
    description: "Upgrade lighting",
    quantity: 30,
    unit_cost: 90.0,
    total_amount: 2700.0,
    assigned_sub_id: 206,
    assigned_percent: 60,
    status: "pending_approval",
  },
  {
    id: 25,
    project_id: 3,
    description: "Paint warehouse interior",
    quantity: 1,
    unit_cost: 4000.0,
    total_amount: 4000.0,
    assigned_sub_id: 225,
    assigned_percent: 100,
    status: "completed",
  },

  // Project 4
  {
    id: 7,
    project_id: 4,
    description: "Install bleachers",
    quantity: 12,
    unit_cost: 1200.0,
    total_amount: 14400.0,
    assigned_sub_id: 207,
    assigned_percent: 100,
    status: "completed",
  },
  {
    id: 8,
    project_id: 4,
    description: "Paint court lines",
    quantity: 1,
    unit_cost: 1500.0,
    total_amount: 1500.0,
    assigned_sub_id: 208,
    assigned_percent: 100,
    status: "pending_approval",
  },
  {
    id: 26,
    project_id: 4,
    description: "Install LED gym lights",
    quantity: 30,
    unit_cost: 150.0,
    total_amount: 4500.0,
    assigned_sub_id: 226,
    assigned_percent: 100,
    status: "approved",
  },

  // Project 5
  {
    id: 9,
    project_id: 5,
    description: "Install plumbing infrastructure",
    quantity: 60,
    unit_cost: 200.0,
    total_amount: 12000.0,
    assigned_sub_id: 209,
    assigned_percent: 90,
    status: "assigned",
  },
  {
    id: 10,
    project_id: 5,
    description: "Install roofing trusses",
    quantity: 30,
    unit_cost: 150.0,
    total_amount: 4500.0,
    assigned_sub_id: 210,
    assigned_percent: 75,
    status: "completed",
  },
  {
    id: 27,
    project_id: 5,
    description: "Grade lots for drainage",
    quantity: 15,
    unit_cost: 300.0,
    total_amount: 4500.0,
    assigned_sub_id: 227,
    assigned_percent: 100,
    status: "completed",
  },

  // Project 6
  {
    id: 11,
    project_id: 6,
    description: "Frame medical exam rooms",
    quantity: 100,
    unit_cost: 35.0,
    total_amount: 3500.0,
    assigned_sub_id: 211,
    assigned_percent: 85,
    status: "assigned",
  },
  {
    id: 12,
    project_id: 6,
    description: "Install x-ray shielding",
    quantity: 20,
    unit_cost: 200.0,
    total_amount: 4000.0,
    assigned_sub_id: 212,
    assigned_percent: 100,
    status: "approved",
  },
  {
    id: 28,
    project_id: 6,
    description: "Install fire suppression",
    quantity: 1,
    unit_cost: 9000.0,
    total_amount: 9000.0,
    assigned_sub_id: 228,
    assigned_percent: 100,
    status: "unassigned",
  },

  // Project 7
  {
    id: 13,
    project_id: 7,
    description: "Replace facade tiles",
    quantity: 500,
    unit_cost: 12.0,
    total_amount: 6000.0,
    assigned_sub_id: 213,
    assigned_percent: 100,
    status: "completed",
  },
  {
    id: 14,
    project_id: 7,
    description: "Install LED signage",
    quantity: 5,
    unit_cost: 800.0,
    total_amount: 4000.0,
    assigned_sub_id: 214,
    assigned_percent: 60,
    status: "assigned",
  },
  {
    id: 29,
    project_id: 7,
    description: "Install new glass entryway",
    quantity: 2,
    unit_cost: 3500.0,
    total_amount: 7000.0,
    assigned_sub_id: 229,
    assigned_percent: 100,
    status: "pending_approval",
  },

  // Project 8
  {
    id: 15,
    project_id: 8,
    description: "Install fume hoods",
    quantity: 6,
    unit_cost: 1500.0,
    total_amount: 9000.0,
    assigned_sub_id: 215,
    assigned_percent: 100,
    status: "approved",
  },
  {
    id: 16,
    project_id: 8,
    description: "Upgrade air handling unit",
    quantity: 1,
    unit_cost: 12000.0,
    total_amount: 12000.0,
    assigned_sub_id: 216,
    assigned_percent: 100,
    status: "pending_approval",
  },
  {
    id: 30,
    project_id: 8,
    description: "Install lab benches",
    quantity: 10,
    unit_cost: 900.0,
    total_amount: 9000.0,
    assigned_sub_id: 230,
    assigned_percent: 100,
    status: "assigned",
  },

  // Project 9
  {
    id: 17,
    project_id: 9,
    description: "Install balcony railings",
    quantity: 25,
    unit_cost: 220.0,
    total_amount: 5500.0,
    assigned_sub_id: 217,
    assigned_percent: 100,
    status: "assigned",
  },
  {
    id: 18,
    project_id: 9,
    description: "Paint exterior",
    quantity: 1,
    unit_cost: 20000.0,
    total_amount: 20000.0,
    assigned_sub_id: 218,
    assigned_percent: 100,
    status: "approved",
  },
  {
    id: 31,
    project_id: 9,
    description: "Install elevator system",
    quantity: 1,
    unit_cost: 25000.0,
    total_amount: 25000.0,
    assigned_sub_id: 231,
    assigned_percent: 100,
    status: "approved",
  },

  // Project 10
  {
    id: 19,
    project_id: 10,
    description: "Replace windows",
    quantity: 40,
    unit_cost: 350.0,
    total_amount: 14000.0,
    assigned_sub_id: 219,
    assigned_percent: 90,
    status: "completed",
  },
  {
    id: 20,
    project_id: 10,
    description: "Install lighting fixtures",
    quantity: 60,
    unit_cost: 75.0,
    total_amount: 4500.0,
    assigned_sub_id: 220,
    assigned_percent: 100,
    status: "assigned",
  },
  {
    id: 32,
    project_id: 10,
    description: "Refinish hardwood floors",
    quantity: 2000,
    unit_cost: 4.5,
    total_amount: 9000.0,
    assigned_sub_id: 232,
    assigned_percent: 90,
    status: "completed",
  },
];

///////////////////////////////////////
//////////////////////////////////////
////////////////////////////////////
//////////////////////////////////
////////////////////////////////
//////////////////////////////
////////////////////////////
//////////////////////////
////////////////////////
//////////////////////
////////////////////
//////////////////
////////////////
//////////////
////////////
//////////
////////
//////
////
//

export const SubcontractorTable = [
  {
    id: 1,
    name: "Precision Plumbing",
    email: "precision@subs.com",
    project_id: 1,
    user_id: 1,
  },
  {
    id: 2,
    name: "Elite Electrical",
    email: "elite@subs.com",
    project_id: 1,
    user_id: 1,
  },
  {
    id: 3,
    name: "Solid Foundations",
    email: "foundations@subs.com",
    project_id: 2,
    user_id: 1,
  },
  {
    id: 4,
    name: "Top Frame Carpentry",
    email: "carpentry@subs.com",
    project_id: 2,
    user_id: 1,
  },
  {
    id: 5,
    name: "True Roofing Co.",
    email: "roofing@subs.com",
    project_id: 3,
    user_id: 1,
  },
  {
    id: 6,
    name: "Clear View Windows",
    email: "windows@subs.com",
    project_id: 3,
    user_id: 1,
  },
  {
    id: 7,
    name: "Cool Breeze HVAC",
    email: "hvac@subs.com",
    project_id: 4,
    user_id: 1,
  },
  {
    id: 8,
    name: "Modern Masonry",
    email: "masonry@subs.com",
    project_id: 4,
    user_id: 1,
  },
  {
    id: 9,
    name: "Perfect Paints",
    email: "paint@subs.com",
    project_id: 5,
    user_id: 1,
  },
  {
    id: 10,
    name: "Pro Flooring Installers",
    email: "flooring@subs.com",
    project_id: 5,
    user_id: 1,
  },
];
