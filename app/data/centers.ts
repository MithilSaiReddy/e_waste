import { EWasteCenter } from "../components/CenterDetails";

export const bangaloreZones = [
  "North Bangalore",
  "South Bangalore",
  "East Bangalore",
  "West Bangalore",
  "Central Bangalore",
] as const;

export type BangaloreZone = typeof bangaloreZones[number];

export interface EWasteCenterWithZone extends EWasteCenter {
  zone: BangaloreZone;
  type?: string;
  pickup?: string;
  rating?: string;
}

// Helper function to determine zone based on area
function getZone(area: string): BangaloreZone {
  const areaLower = area.toLowerCase();

  // North: Peenya, Yelahanka, Nandini Layout, Hebbal
  if (areaLower.includes("peenya") || areaLower.includes("yelahanka") ||
      areaLower.includes("nandini") || areaLower.includes("nelamangala") ||
      areaLower.includes("dobaspet")) {
    return "North Bangalore";
  }

  // South: JP Nagar, Banashankari, Wilson Garden, Jayanagar
  if (areaLower.includes("jp nagar") || areaLower.includes("banashankari") ||
      areaLower.includes("wilson") || areaLower.includes("jayanagar")) {
    return "South Bangalore";
  }

  // East: Whitefield, HSR Layout, Electronic City, Domlur, Marathahalli, Kadugodi
  if (areaLower.includes("whitefield") || areaLower.includes("hsr") ||
      areaLower.includes("electronic city") || areaLower.includes("domlur") ||
      areaLower.includes("marathahalli") || areaLower.includes("kadugodi")) {
    return "East Bangalore";
  }

  // West: Rajajinagar
  if (areaLower.includes("rajajinagar")) {
    return "West Bangalore";
  }

  // Central: Koramangala, MG Road, Chamrajpet, Indiranagar, Citywide
  return "Central Bangalore";
}

// Helper function to get approximate coordinates based on area
function getCoordinates(area: string): { lat: number; lng: number } {
  const areaLower = area.toLowerCase();

  // North areas
  if (areaLower.includes("peenya")) return { lat: 13.0294, lng: 77.5196 };
  if (areaLower.includes("nandini")) return { lat: 13.0300, lng: 77.5344 };
  if (areaLower.includes("nelamangala") || areaLower.includes("dobaspet"))
    return { lat: 13.0993, lng: 77.3914 };

  // South areas
  if (areaLower.includes("jp nagar")) return { lat: 12.9084, lng: 77.5857 };
  if (areaLower.includes("banashankari")) return { lat: 12.9250, lng: 77.5469 };
  if (areaLower.includes("wilson")) return { lat: 12.9540, lng: 77.6040 };
  if (areaLower.includes("jayanagar")) return { lat: 12.9250, lng: 77.5937 };

  // East areas
  if (areaLower.includes("whitefield")) return { lat: 12.9698, lng: 77.7499 };
  if (areaLower.includes("hsr")) return { lat: 12.9121, lng: 77.6446 };
  if (areaLower.includes("electronic city")) return { lat: 12.8396, lng: 77.6771 };
  if (areaLower.includes("domlur")) return { lat: 12.9608, lng: 77.6387 };
  if (areaLower.includes("marathahalli")) return { lat: 12.9591, lng: 77.7010 };
  if (areaLower.includes("kadugodi")) return { lat: 13.0041, lng: 77.7594 };

  // West areas
  if (areaLower.includes("rajajinagar")) return { lat: 12.9916, lng: 77.5512 };

  // Central areas
  if (areaLower.includes("koramangala")) return { lat: 12.9352, lng: 77.6245 };
  if (areaLower.includes("mg road")) return { lat: 12.9760, lng: 77.6065 };
  if (areaLower.includes("chamrajpet")) return { lat: 12.9600, lng: 77.5737 };
  if (areaLower.includes("indiranagar")) return { lat: 12.9784, lng: 77.6408 };

  // Default to Bangalore center
  return { lat: 12.9716, lng: 77.5946 };
}

export const centersData: EWasteCenterWithZone[] = [
  {
    id: 1,
    name: "E-Parisaraa Pvt. Ltd.",
    address: "No. 41/1, 3rd Stage, Peenya Industrial Estate, Bangalore - 560058",
    zone: getZone("Peenya"),
    ...getCoordinates("Peenya"),
    phone: "080-28360902",
    email: "recycle@ewasteindia.com",
    hours: "Mon-Sat: 9:00 AM - 5:30 PM",
    type: "Certified Recycler",
    acceptedItems: ["Computers", "Phones", "Batteries", "WEEE"],
    pickup: "Yes (bulk)",
    certifications: ["KSPCB Authorized", "ISO 14001 Certified", "Government Approved"],
    rating: "4.6",
  },
  {
    id: 2,
    name: "Zolopik E-Waste Recycling",
    address: "#58, 22nd Main Rd, Marenahalli, JP Nagar 2nd Phase, Bangalore - 560078",
    zone: getZone("JP Nagar"),
    ...getCoordinates("JP Nagar"),
    phone: "97434 40440",
    email: "recycle@zolopik.com",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    type: "Certified Recycler",
    acceptedItems: ["Laptops", "Mobiles", "TVs", "Appliances"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Doorstep Pickup Available", "EPR Certified"],
    rating: "4.6",
  },
  {
    id: 3,
    name: "Escrappy Recyclers",
    address: "#106, Byraveshwara Industrial Estate, Andrahalli Main Rd, Peenya 2nd Stage, Bangalore - 560091",
    zone: getZone("Peenya"),
    ...getCoordinates("Peenya"),
    phone: "99809 97863",
    email: "info@escrappyrecyclers.com",
    hours: "Mon-Sat: 9:00 AM - 6:30 PM",
    type: "Certified Recycler",
    acceptedItems: ["All electronics", "Data destruction services"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Data Destruction Certified", "ISO Certified"],
    rating: "4.8",
  },
  {
    id: 4,
    name: "Ewaste Hub",
    address: "No. 3, 10th Cross, Lakkasandra Extn, Wilson Garden, Bangalore - 560027",
    zone: getZone("Wilson Garden"),
    ...getCoordinates("Wilson Garden"),
    phone: "90663 19066",
    email: "contact@ewastehub.com",
    hours: "Mon-Sun: 6:00 AM - 10:00 PM",
    type: "Collection Centre",
    acceptedItems: ["All electronics", "Laptops", "Monitors"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "24/7 Service", "Quick Pickup"],
    rating: "4.5",
  },
  {
    id: 5,
    name: "Attero Recycling Pvt. Ltd.",
    address: "No. 1064, 7th A Main Rd, Koramangala 1A Block, Bangalore - 560034",
    zone: getZone("Koramangala"),
    ...getCoordinates("Koramangala"),
    phone: "By appointment",
    email: "bangalore@attero.in",
    hours: "By appointment",
    type: "Certified Recycler",
    acceptedItems: ["Bulk IT assets", "Batteries", "Corporate e-waste"],
    pickup: "Yes (bulk/corporate)",
    certifications: ["KSPCB Authorized", "Corporate Specialist", "Premium Service"],
    rating: "5.0",
  },
  {
    id: 6,
    name: "Karo Sambhav Collection Centre",
    address: "No. 225, 2nd Main Rd, 7th Block Phase 3, Banashankari 3rd Stage, Bangalore - 560085",
    zone: getZone("Banashankari"),
    ...getCoordinates("Banashankari"),
    phone: "1800-2121-434",
    email: "engage@karosambhav.com",
    hours: "Mon-Sat: 9:30 AM - 6:30 PM",
    type: "EPR Collection Centre",
    acceptedItems: ["Phones", "Laptops", "Small Appliances"],
    pickup: "No (drop-off only)",
    certifications: ["KSPCB Authorized", "EPR Partner", "Toll-Free Support"],
    rating: "5.0",
  },
  {
    id: 7,
    name: "Sri Manjunatha Swamy Traders",
    address: "15/4, 6th Cross, Azad Nagar, Chamrajpet, Bangalore - 560018",
    zone: getZone("Chamrajpet"),
    ...getCoordinates("Chamrajpet"),
    phone: "94492 66336",
    email: "contact@ewastebuyer.in",
    hours: "Open 24 hours, 7 days",
    type: "E-Waste Buyer",
    acceptedItems: ["All electronics", "UPS", "Batteries"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "24/7 Service", "Instant Pickup"],
    rating: "4.8",
  },
  {
    id: 8,
    name: "Recyclekaro",
    address: "Sompura KIADB Industrial Area, Nelamangala Taluk, Bengaluru Rural - 562111",
    zone: getZone("Nelamangala"),
    ...getCoordinates("Nelamangala"),
    phone: "Book online",
    email: "support@recyclekaro.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    type: "Certified Recycler",
    acceptedItems: ["Laptops", "Phones", "Refrigerators", "Chargers"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Online Booking", "Wide Coverage"],
    rating: "4.5",
  },
  {
    id: 9,
    name: "Spas Recycling Pvt. Ltd.",
    address: "Peenya Industrial Area, Bangalore - 560058",
    zone: getZone("Peenya"),
    ...getCoordinates("Peenya"),
    phone: "Book via website",
    email: "info@spasrecycling.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    type: "Corporate Recycler",
    acceptedItems: ["Servers", "Laptops", "Printers", "Phones", "UPS"],
    pickup: "Yes (free for corporates)",
    certifications: ["KSPCB Authorized", "Corporate Specialist", "Free Corporate Pickup"],
    rating: "4.7",
  },
  {
    id: 10,
    name: "Gravity E-Waste Management",
    address: "Whitefield Area, Bangalore - 560066",
    zone: getZone("Whitefield"),
    ...getCoordinates("Whitefield"),
    phone: "Book via website",
    email: "contact@wastematerial.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    type: "Certified Recycler",
    acceptedItems: ["Computers", "TVs", "Phones", "All electronics"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Whitefield Specialist", "Quick Response"],
    rating: "4.4",
  },
  {
    id: 11,
    name: "Refresh Technology",
    address: "Domlur, Bangalore - 560071",
    zone: getZone("Domlur"),
    ...getCoordinates("Domlur"),
    phone: "Book via website",
    email: "info@refreshtechnology.co.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    type: "Certified Recycler",
    acceptedItems: ["Laptops", "Desktops", "Phones", "Data secure disposal"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Data Security Certified", "Secure Disposal"],
    rating: "4.5",
  },
  {
    id: 12,
    name: "Proaucs",
    address: "Electronic City, Bangalore - 560100",
    zone: getZone("Electronic City"),
    ...getCoordinates("Electronic City"),
    phone: "Book via website",
    email: "contact@proaucs.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    type: "Digital Auction Recycler",
    acceptedItems: ["IT assets", "Servers", "Lithium batteries"],
    pickup: "Yes (corporate)",
    certifications: ["KSPCB Authorized", "Asset Recovery", "Corporate Solutions"],
    rating: "4.6",
  },
  {
    id: 13,
    name: "Sree E-Waste Recycling",
    address: "HSR Layout, Bangalore - 560102",
    zone: getZone("HSR Layout"),
    ...getCoordinates("HSR Layout"),
    phone: "Book via website",
    email: "info@sreeewasterecycling.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    type: "Certified Recycler",
    acceptedItems: ["All electronics", "Sorting", "Data Destruction"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Complete Solutions", "Data Destruction"],
    rating: "4.5",
  },
  {
    id: 14,
    name: "E-Parisaraa Dobaspet Facility",
    address: "Dobaspet Industrial Area, Nelamangala, Bangalore - 562111",
    zone: getZone("Dobaspet"),
    ...getCoordinates("Dobaspet"),
    phone: "080-28360902",
    email: "recycle@ewasteindia.com",
    hours: "Mon-Sat: 9:00 AM - 5:30 PM",
    type: "Full Recycling Facility",
    acceptedItems: ["All WEEE", "Batteries", "Bulk recycling"],
    pickup: "Yes (bulk/corporate)",
    certifications: ["KSPCB Authorized", "Large Scale Facility", "Complete WEEE Solutions"],
    rating: "4.6",
  },
  {
    id: 15,
    name: "Sri Ganesha Old Paper & E-Waste Mart",
    address: "No. 46, 4th Cross, 8th Main Rd, Ganesha Block, Nandini Layout, Bangalore - 560096",
    zone: getZone("Nandini Layout"),
    ...getCoordinates("Nandini Layout"),
    phone: "96206 76626",
    email: "contact@sriganesha.in",
    hours: "Open 24 hours, 7 days",
    type: "E-Waste & Scrap Buyer",
    acceptedItems: ["All electronics", "Old appliances", "Scrap"],
    pickup: "Yes (doorstep)",
    certifications: ["Local Collection Center", "24/7 Service", "Immediate Response"],
    rating: "5.0",
  },
  {
    id: 16,
    name: "Zolopik - Kadugodi / Whitefield Centre",
    address: "7, A-1, off Whitefield Main Road, Kadugodi Colony, Kadugodi, Bangalore - 560067",
    zone: getZone("Kadugodi"),
    ...getCoordinates("Kadugodi"),
    phone: "97434 40440",
    email: "recycle@zolopik.com",
    hours: "Mon-Sun: 9:00 AM - 6:00 PM",
    type: "Collection Centre",
    acceptedItems: ["Laptops", "Phones", "Appliances", "All electronics"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Multiple Locations", "Weekend Service"],
    rating: "4.6",
  },
];

// Function to get centers by Bangalore zone
export function getCentersByZone(zone: BangaloreZone): {
  centers: EWasteCenterWithZone[];
  centerPoint: [number, number];
} {
  const filteredCenters = centersData.filter((center) => center.zone === zone);

  if (filteredCenters.length === 0) {
    return {
      centers: [],
      centerPoint: [12.9716, 77.5946],
    };
  }

  // Calculate center point based on average of all centers in the zone
  const avgLat = filteredCenters.reduce((sum, c) => sum + c.lat, 0) / filteredCenters.length;
  const avgLng = filteredCenters.reduce((sum, c) => sum + c.lng, 0) / filteredCenters.length;

  return {
    centers: filteredCenters,
    centerPoint: [avgLat, avgLng],
  };
}

// Get all centers in Bangalore
export function getAllBangaloreCenters(): {
  centers: EWasteCenterWithZone[];
  centerPoint: [number, number];
} {
  // Center point for Bangalore
  return {
    centers: centersData,
    centerPoint: [12.9716, 77.5946],
  };
}
