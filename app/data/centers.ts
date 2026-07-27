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
}

function getZone(area: string): BangaloreZone {
  const a = area.toLowerCase();

  if (a.includes("peenya") || a.includes("yelahanka") ||
      a.includes("nandini") || a.includes("nelamangala") ||
      a.includes("dobaspet") || a.includes("hebbal") ||
      a.includes("mathikere") || a.includes("rt nagar") ||
      a.includes("vidyaranyapura") || a.includes("yeshwanthpur") ||
      a.includes("dasarahalli") || a.includes("jalahalli")) {
    return "North Bangalore";
  }

  if (a.includes("jp nagar") || a.includes("banashankari") ||
      a.includes("wilson") || a.includes("jayanagar") ||
      a.includes("btm") || a.includes("bannerghatta") ||
      a.includes("kumaraswamy") || a.includes("basavanagudi") ||
      a.includes("padmanabhanagar") || a.includes("gubbalala") ||
      a.includes("arekere") || a.includes("hulimavu")) {
    return "South Bangalore";
  }

  if (a.includes("whitefield") || a.includes("hsr") ||
      a.includes("electronic city") || a.includes("domlur") ||
      a.includes("marathahalli") || a.includes("kadugodi") ||
      a.includes("hoodi") || a.includes("brookefield") ||
      a.includes("cv raman nagar") || a.includes("kr puram") ||
      a.includes("bellandur") || a.includes("sarjapur")) {
    return "East Bangalore";
  }

  if (a.includes("rajajinagar") || a.includes("vijayanagar") ||
      a.includes("basaveshwaranagar") || a.includes("magadi road") ||
      a.includes("kengeri") || a.includes("nagarbhavi") ||
      a.includes("malleswaram") || a.includes("mattikere") ||
      a.includes("kamakshipalya") || a.includes("hosahalli") ||
      a.includes("nayandahalli") || a.includes("gokula")) {
    return "West Bangalore";
  }

  return "Central Bangalore";
}

function getCoordinates(area: string): { lat: number; lng: number } {
  const a = area.toLowerCase();

  if (a.includes("peenya")) return { lat: 13.0294, lng: 77.5196 };
  if (a.includes("nandini")) return { lat: 13.0300, lng: 77.5344 };
  if (a.includes("nelamangala") || a.includes("dobaspet"))
    return { lat: 13.0993, lng: 77.3914 };
  if (a.includes("yelahanka")) return { lat: 13.1007, lng: 77.5963 };
  if (a.includes("hebbal")) return { lat: 13.0358, lng: 77.5970 };
  if (a.includes("mathikere")) return { lat: 13.0224, lng: 77.5649 };
  if (a.includes("rt nagar")) return { lat: 13.0185, lng: 77.5945 };
  if (a.includes("vidyaranyapura")) return { lat: 13.0755, lng: 77.5472 };
  if (a.includes("yeshwanthpur")) return { lat: 13.0288, lng: 77.5433 };
  if (a.includes("dasarahalli")) return { lat: 13.0508, lng: 77.5130 };
  if (a.includes("jalahalli")) return { lat: 13.0488, lng: 77.5364 };

  if (a.includes("jp nagar")) return { lat: 12.9084, lng: 77.5857 };
  if (a.includes("banashankari")) return { lat: 12.9250, lng: 77.5469 };
  if (a.includes("wilson")) return { lat: 12.9540, lng: 77.6040 };
  if (a.includes("jayanagar")) return { lat: 12.9250, lng: 77.5937 };
  if (a.includes("btm")) return { lat: 12.9080, lng: 77.6110 };
  if (a.includes("bannerghatta")) return { lat: 12.8838, lng: 77.5970 };
  if (a.includes("kumaraswamy")) return { lat: 12.9100, lng: 77.5629 };
  if (a.includes("basavanagudi")) return { lat: 12.9428, lng: 77.5736 };
  if (a.includes("padmanabhanagar")) return { lat: 12.8980, lng: 77.5609 };
  if (a.includes("gubbalala")) return { lat: 12.8780, lng: 77.5410 };
  if (a.includes("arekere")) return { lat: 12.8910, lng: 77.6070 };
  if (a.includes("hulimavu")) return { lat: 12.8760, lng: 77.6100 };

  if (a.includes("whitefield")) return { lat: 12.9698, lng: 77.7499 };
  if (a.includes("hsr")) return { lat: 12.9121, lng: 77.6446 };
  if (a.includes("electronic city")) return { lat: 12.8396, lng: 77.6771 };
  if (a.includes("domlur")) return { lat: 12.9608, lng: 77.6387 };
  if (a.includes("marathahalli")) return { lat: 12.9591, lng: 77.7010 };
  if (a.includes("kadugodi")) return { lat: 13.0041, lng: 77.7594 };
  if (a.includes("hoodi")) return { lat: 12.9920, lng: 77.7110 };
  if (a.includes("brookefield")) return { lat: 12.9670, lng: 77.7100 };
  if (a.includes("cv raman nagar")) return { lat: 12.9850, lng: 77.6610 };
  if (a.includes("kr puram")) return { lat: 13.0100, lng: 77.6935 };
  if (a.includes("bellandur")) return { lat: 12.9260, lng: 77.6760 };
  if (a.includes("sarjapur")) return { lat: 12.8600, lng: 77.6930 };

  if (a.includes("rajajinagar")) return { lat: 12.9916, lng: 77.5512 };
  if (a.includes("vijayanagar")) return { lat: 12.9700, lng: 77.5330 };
  if (a.includes("basaveshwaranagar")) return { lat: 12.9870, lng: 77.5430 };
  if (a.includes("magadi road")) return { lat: 12.9700, lng: 77.5100 };
  if (a.includes("kengeri")) return { lat: 12.9120, lng: 77.4820 };
  if (a.includes("nagarbhavi")) return { lat: 12.9600, lng: 77.5090 };
  if (a.includes("malleswaram")) return { lat: 12.9950, lng: 77.5690 };
  if (a.includes("mattikere")) return { lat: 13.0010, lng: 77.5490 };
  if (a.includes("kamakshipalya")) return { lat: 12.9800, lng: 77.5300 };
  if (a.includes("hosahalli")) return { lat: 12.9630, lng: 77.5280 };
  if (a.includes("nayandahalli")) return { lat: 12.9260, lng: 77.5270 };
  if (a.includes("gokula")) return { lat: 13.0050, lng: 77.5570 };

  if (a.includes("koramangala")) return { lat: 12.9352, lng: 77.6245 };
  if (a.includes("mg road")) return { lat: 12.9760, lng: 77.6065 };
  if (a.includes("chamrajpet")) return { lat: 12.9600, lng: 77.5737 };
  if (a.includes("indiranagar")) return { lat: 12.9784, lng: 77.6408 };
  if (a.includes("shivajinagar")) return { lat: 12.9850, lng: 77.6070 };
  if (a.includes("vasanth nagar")) return { lat: 12.9890, lng: 77.5930 };
  if (a.includes("richmond town")) return { lat: 12.9700, lng: 77.6030 };
  if (a.includes("frazer town")) return { lat: 13.0010, lng: 77.6150 };
  if (a.includes("sadashivanagar")) return { lat: 13.0030, lng: 77.5800 };
  if (a.includes("hal")) return { lat: 12.9600, lng: 77.6480 };

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
    acceptedItems: ["All electronics", "Laptops", "Monitors"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Quick Pickup"],
    rating: "4.5",
  },
  {
    id: 5,
    name: "Attero Recycling Pvt. Ltd.",
    address: "No. 1064, 7th A Main Rd, Koramangala 1A Block, Bangalore - 560034",
    zone: getZone("Koramangala"),
    ...getCoordinates("Koramangala"),
    phone: "90351 20001",
    email: "bangalore@attero.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
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
    phone: "76767 14525",
    email: "support@recyclekaro.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
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
    phone: "98862 34567",
    email: "info@spasrecycling.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
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
    phone: "97420 56789",
    email: "contact@wastematerial.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
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
    phone: "98450 12345",
    email: "info@refreshtechnology.co.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
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
    phone: "99803 45678",
    email: "contact@proaucs.com",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
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
    phone: "97411 23456",
    email: "info@sreeewasterecycling.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
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
    acceptedItems: ["Laptops", "Phones", "Appliances", "All electronics"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Multiple Locations", "Weekend Service"],
    rating: "4.6",
  },
  {
    id: 17,
    name: "Namo E-Waste Management",
    address: "#245, 2nd Main Rd, Vijayanagar, Bangalore - 560040",
    zone: getZone("Vijayanagar"),
    ...getCoordinates("Vijayanagar"),
    phone: "98452 34567",
    email: "info@namoewaste.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["Computers", "Phones", "TVs", "Appliances"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Doorstep Pickup", "Vijayanagar Zone"],
    rating: "4.4",
  },
  {
    id: 18,
    name: "Green IT Recycling",
    address: "#88, 3rd Stage, Basaveshwaranagar, Bangalore - 560079",
    zone: getZone("Basaveshwaranagar"),
    ...getCoordinates("Basaveshwaranagar"),
    phone: "99801 23456",
    email: "recycle@greenitrecycling.in",
    hours: "Mon-Sat: 9:30 AM - 6:00 PM",
    acceptedItems: ["Laptops", "Desktops", "Servers", "Phones"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "IT Asset Specialist", "Data Destruction"],
    rating: "4.5",
  },
  {
    id: 19,
    name: "E-Waste Recyclers India",
    address: "#12, Magadi Road, Bangalore - 560023",
    zone: getZone("Magadi Road"),
    ...getCoordinates("Magadi Road"),
    phone: "97422 34567",
    email: "info@ewasterecyclersindia.com",
    hours: "Mon-Sat: 9:00 AM - 5:30 PM",
    acceptedItems: ["All electronics", "Batteries", "UPS", "Cables"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Quick Service", "Free Pickup"],
    rating: "4.3",
  },
  {
    id: 20,
    name: "Clean E-India Recycling",
    address: "#45, Kengeri Satellite Town, Bangalore - 560060",
    zone: getZone("Kengeri"),
    ...getCoordinates("Kengeri"),
    phone: "96200 56789",
    email: "contact@cleaneindia.com",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    acceptedItems: ["Computers", "Laptops", "Phones", "Printers"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Kengeri Service", "Affordable Recycling"],
    rating: "4.4",
  },
  {
    id: 21,
    name: "Eco Bengaluru Recycling",
    address: "#333, 10th Cross, Malleswaram, Bangalore - 560003",
    zone: getZone("Malleswaram"),
    ...getCoordinates("Malleswaram"),
    phone: "98867 89101",
    email: "info@ecobengaluru.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["Home appliances", "Phones", "Laptops", "Batteries"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Malleswaram Collection", "Home Pickup"],
    rating: "4.6",
  },
  {
    id: 22,
    name: "Green Earth Recyclers",
    address: "#78, Nagarbhavi Main Road, Bangalore - 560072",
    zone: getZone("Nagarbhavi"),
    ...getCoordinates("Nagarbhavi"),
    phone: "98456 78901",
    email: "greenearth@recycle.in",
    hours: "Mon-Sat: 9:30 AM - 5:30 PM",
    acceptedItems: ["All electronics", "Scrap", "Old appliances"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Waste Pickup", "E-Waste Disposal"],
    rating: "4.2",
  },
  {
    id: 23,
    name: "Responsible E-Waste Hub",
    address: "Kamakshipalya, Bangalore - 560079",
    zone: getZone("Kamakshipalya"),
    ...getCoordinates("Kamakshipalya"),
    phone: "96321 65478",
    email: "info@responsibleewaste.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["Computers", "Phones", "Batteries", "Cables"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "E-Waste Collection", "West Bangalore Service"],
    rating: "4.3",
  },
  {
    id: 24,
    name: "Green Bangalore Recyclers",
    address: "#56, Shivajinagar, Bangalore - 560001",
    zone: getZone("Shivajinagar"),
    ...getCoordinates("Shivajinagar"),
    phone: "97400 12345",
    email: "info@greenbangalore.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["Laptops", "Phones", "TVs", "Small appliances"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Central Zone", "Quick Pickup"],
    rating: "4.5",
  },
  {
    id: 25,
    name: "City E-Waste Collection",
    address: "#22, Vasanth Nagar, Bangalore - 560052",
    zone: getZone("Vasanth Nagar"),
    ...getCoordinates("Vasanth Nagar"),
    phone: "99888 76543",
    email: "city@ewastecollection.in",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    acceptedItems: ["All electronics", "Office e-waste", "IT assets"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Office Pickup", "Corporate Service"],
    rating: "4.4",
  },
  {
    id: 26,
    name: "E-Waste Pickup Services",
    address: "#190, Richmond Town, Bangalore - 560025",
    zone: getZone("Richmond Town"),
    ...getCoordinates("Richmond Town"),
    phone: "98451 23489",
    email: "pickup@ewasteservices.in",
    hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    acceptedItems: ["Phones", "Laptops", "Desktops", "Printers"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Extended Hours", "Central Coverage"],
    rating: "4.6",
  },
  {
    id: 27,
    name: "Bengaluru Green Recyclers",
    address: "#8, Frazer Town, Bangalore - 560005",
    zone: getZone("Frazer Town"),
    ...getCoordinates("Frazer Town"),
    phone: "98765 43210",
    email: "info@blgrecyclers.in",
    hours: "Mon-Sat: 9:30 AM - 6:00 PM",
    acceptedItems: ["Home appliances", "Phones", "Computers", "WEEE"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Residential Pickup", "Eco-Friendly Disposal"],
    rating: "4.3",
  },
  {
    id: 28,
    name: "Eco E-Waste Solutions",
    address: "#15, Sadashivanagar, Bangalore - 560080",
    zone: getZone("Sadashivanagar"),
    ...getCoordinates("Sadashivanagar"),
    phone: "97311 22334",
    email: "solutions@ecoewaste.in",
    hours: "Mon-Sat: 9:00 AM - 5:30 PM",
    acceptedItems: ["Laptops", "Phones", "Batteries", "Chargers"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Data Erasure Service", "Certified Disposal"],
    rating: "4.5",
  },
  {
    id: 29,
    name: "IT Hardware Recyclers",
    address: "HAL 2nd Stage, Indiranagar, Bangalore - 560008",
    zone: getZone("HAL"),
    ...getCoordinates("HAL"),
    phone: "99000 11223",
    email: "recycle@ithardware.in",
    hours: "Mon-Fri: 9:00 AM - 6:00 PM",
    acceptedItems: ["Servers", "Networking gear", "Desktops", "Laptops"],
    pickup: "Yes (corporate)",
    certifications: ["KSPCB Authorized", "ITAD Certified", "Corporate Only"],
    rating: "4.7",
  },
  {
    id: 30,
    name: "Waste Reduction India",
    address: "#67, 2nd Cross, BTM Layout 1st Stage, Bangalore - 560029",
    zone: getZone("BTM Layout"),
    ...getCoordinates("BTM Layout"),
    phone: "97413 45678",
    email: "info@wastereductionindia.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["All electronics", "Batteries", "Phones", "Laptops"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "BTM Service", "Same-Day Pickup"],
    rating: "4.4",
  },
  {
    id: 31,
    name: "Green Planet Recycling",
    address: "#90, Bannerghatta Road, Bangalore - 560076",
    zone: getZone("Bannerghatta Road"),
    ...getCoordinates("Bannerghatta Road"),
    phone: "98800 67890",
    email: "contact@greenplanetrecycle.in",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    acceptedItems: ["Computers", "TVs", "Phones", "Large appliances"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Bannerghatta Zone", "TV Recycling Specialist"],
    rating: "4.3",
  },
  {
    id: 32,
    name: "E-Waste Mart",
    address: "#12, Kumaraswamy Layout, Bangalore - 560078",
    zone: getZone("Kumaraswamy Layout"),
    ...getCoordinates("Kumaraswamy Layout"),
    phone: "96208 56789",
    email: "info@ewastemart.in",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    acceptedItems: ["All electronics", "Old phones", "Appliances"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Extended Hours", "Weekend Service"],
    rating: "4.7",
  },
  {
    id: 33,
    name: "Green Era Recycling",
    address: "#55, Basavanagudi, Bangalore - 560004",
    zone: getZone("Basavanagudi"),
    ...getCoordinates("Basavanagudi"),
    phone: "98453 45678",
    email: "info@grnrecycling.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["Laptops", "Phones", "Books (e-waste)", "Accessories"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Basavanagudi Collection", "Green Initiative"],
    rating: "4.5",
  },
  {
    id: 34,
    name: "Eco-Wise Recycling",
    address: "Padmanabhanagar, Bangalore - 560070",
    zone: getZone("Padmanabhanagar"),
    ...getCoordinates("Padmanabhanagar"),
    phone: "97422 12324",
    email: "info@ecowiserecycling.in",
    hours: "Mon-Sat: 9:00 AM - 5:30 PM",
    acceptedItems: ["Home electronics", "Phones", "Laptops", "Scrap"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "South Zone", "Eco-Friendly Processes"],
    rating: "4.2",
  },
  {
    id: 35,
    name: "Recycle India Foundation",
    address: "Hoodi, Whitefield Main Road, Bangalore - 560048",
    zone: getZone("Hoodi"),
    ...getCoordinates("Hoodi"),
    phone: "98809 87654",
    email: "info@recycleindiafoundation.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["IT assets", "Phones", "Laptops", "Servers"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Whitefield Corridor", "Bulk Pickup"],
    rating: "4.5",
  },
  {
    id: 36,
    name: "Green Earth Waste Management",
    address: "Brookefield Mall Road, Bangalore - 560037",
    zone: getZone("Brookefield"),
    ...getCoordinates("Brookefield"),
    phone: "96322 34567",
    email: "contact@greenearthwm.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["Residential e-waste", "Office IT assets", "Phones"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Brookefield Service", "Residential Pickup"],
    rating: "4.3",
  },
  {
    id: 37,
    name: "Tech Recycle Hub",
    address: "CV Raman Nagar, Bangalore - 560093",
    zone: getZone("CV Raman Nagar"),
    ...getCoordinates("CV Raman Nagar"),
    phone: "97433 45678",
    email: "recycle@techrecyclehub.in",
    hours: "Mon-Sat: 9:30 AM - 6:00 PM",
    acceptedItems: ["Laptops", "Desktops", "Phones", "Data center equipment"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Data Center Specialist", "Secure Erasure"],
    rating: "4.6",
  },
  {
    id: 38,
    name: "E-Waste Solutions",
    address: "KR Puram, Bangalore - 560036",
    zone: getZone("KR Puram"),
    ...getCoordinates("KR Puram"),
    phone: "99800 11223",
    email: "info@ewastesolutions.in",
    hours: "Mon-Sat: 9:00 AM - 5:30 PM",
    acceptedItems: ["All electronics", "Phones", "Computer parts"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "KR Puram Zone", "Affordable Rates"],
    rating: "4.4",
  },
  {
    id: 39,
    name: "Green Circle Recyclers",
    address: "Hoodi Circle, Whitefield, Bangalore - 560048",
    zone: getZone("Hoodi"),
    ...getCoordinates("Hoodi"),
    phone: "98455 67890",
    email: "info@greencirclerecyclers.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["Laptops", "Phones", "TVs", "Appliances"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Hoodi Circle", "Prompt Service"],
    rating: "4.3",
  },
  {
    id: 40,
    name: "3R Recyclers",
    address: "Yelahanka New Town, Bangalore - 560064",
    zone: getZone("Yelahanka"),
    ...getCoordinates("Yelahanka"),
    phone: "97404 56789",
    email: "contact@3rrecyclers.com",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["Home electronics", "Phones", "Batteries", "Cables"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Yelahanka Service", "North Zone"],
    rating: "4.4",
  },
  {
    id: 41,
    name: "Eco-Wise Recycling Hub",
    address: "Hebbal, Bangalore - 560024",
    zone: getZone("Hebbal"),
    ...getCoordinates("Hebbal"),
    phone: "98867 12345",
    email: "hub@ecowiserecycling.com",
    hours: "Mon-Sat: 9:00 AM - 5:00 PM",
    acceptedItems: ["Laptops", "Desktops", "Printers", "All IT waste"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "IT Recycling", "North Bangalore Hub"],
    rating: "4.5",
  },
  {
    id: 42,
    name: "Green Worms Recycling",
    address: "Mathikere, Bangalore - 560054",
    zone: getZone("Mathikere"),
    ...getCoordinates("Mathikere"),
    phone: "96204 56780",
    email: "info@greenworms.in",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    acceptedItems: ["Old electronics", "Phones", "Computers", "Appliances"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Mathikere Collection", "E-Waste Disposal"],
    rating: "4.3",
  },
  {
    id: 43,
    name: "CashForScrap Bangalore",
    address: "RT Nagar, Bangalore - 560032",
    zone: getZone("RT Nagar"),
    ...getCoordinates("RT Nagar"),
    phone: "90191 23456",
    email: "info@cashforscrap.in",
    hours: "Mon-Sun: 8:00 AM - 8:00 PM",
    acceptedItems: ["All scrap", "Old electronics", "Phones", "Appliances"],
    pickup: "Yes (doorstep)",
    certifications: ["KSPCB Authorized", "Instant Payment", "Weekend Service"],
    rating: "4.6",
  },
  {
    id: 44,
    name: "TelRecycling Solutions",
    address: "Yeshwanthpur Industrial Area, Bangalore - 560022",
    zone: getZone("Yeshwanthpur"),
    ...getCoordinates("Yeshwanthpur"),
    phone: "99867 89101",
    email: "info@telrecycling.com",
    hours: "Mon-Sat: 9:00 AM - 5:30 PM",
    acceptedItems: ["Telecom equipment", "Phones", "Networking hardware"],
    pickup: "Yes (corporate)",
    certifications: ["KSPCB Authorized", "Telecom Specialist", "Industrial Recycling"],
    rating: "4.5",
  },
];

export const localityZoneMap: Record<string, BangaloreZone> = {
  "peenya": "North Bangalore",
  "yelahanka": "North Bangalore",
  "nandini layout": "North Bangalore",
  "nelamangala": "North Bangalore",
  "dobaspet": "North Bangalore",
  "hebbal": "North Bangalore",
  "mathikere": "North Bangalore",
  "rt nagar": "North Bangalore",
  "vidyaranyapura": "North Bangalore",
  "yeshwanthpur": "North Bangalore",
  "dasarahalli": "North Bangalore",
  "jalahalli": "North Bangalore",
  "jp nagar": "South Bangalore",
  "banashankari": "South Bangalore",
  "wilson garden": "South Bangalore",
  "jayanagar": "South Bangalore",
  "btm layout": "South Bangalore",
  "bannerghatta road": "South Bangalore",
  "kumaraswamy layout": "South Bangalore",
  "basavanagudi": "South Bangalore",
  "padmanabhanagar": "South Bangalore",
  "gubbalala": "South Bangalore",
  "arekere": "South Bangalore",
  "hulimavu": "South Bangalore",
  "whitefield": "East Bangalore",
  "hsr layout": "East Bangalore",
  "electronic city": "East Bangalore",
  "domlur": "East Bangalore",
  "marathahalli": "East Bangalore",
  "kadugodi": "East Bangalore",
  "hoodi": "East Bangalore",
  "brookefield": "East Bangalore",
  "cv raman nagar": "East Bangalore",
  "kr puram": "East Bangalore",
  "bellandur": "East Bangalore",
  "sarjapur": "East Bangalore",
  "rajajinagar": "West Bangalore",
  "vijayanagar": "West Bangalore",
  "basaveshwaranagar": "West Bangalore",
  "magadi road": "West Bangalore",
  "kengeri": "West Bangalore",
  "nagarbhavi": "West Bangalore",
  "malleswaram": "West Bangalore",
  "mattikere": "West Bangalore",
  "kamakshipalya": "West Bangalore",
  "koramangala": "Central Bangalore",
  "mg road": "Central Bangalore",
  "chamrajpet": "Central Bangalore",
  "indiranagar": "Central Bangalore",
  "shivajinagar": "Central Bangalore",
  "vasanth nagar": "Central Bangalore",
  "richmond town": "Central Bangalore",
  "frazer town": "Central Bangalore",
  "sadashivanagar": "Central Bangalore",
  "hal": "Central Bangalore",
};

export function getCentersByZone(zone: BangaloreZone): {
  centers: EWasteCenterWithZone[];
  centerPoint: [number, number];
} {
  const filteredCenters = centersData.filter((center) => center.zone === zone);

  if (filteredCenters.length === 0) {
    return { centers: [], centerPoint: [12.9716, 77.5946] };
  }

  const avgLat = filteredCenters.reduce((sum, c) => sum + c.lat, 0) / filteredCenters.length;
  const avgLng = filteredCenters.reduce((sum, c) => sum + c.lng, 0) / filteredCenters.length;

  return {
    centers: filteredCenters,
    centerPoint: [avgLat, avgLng],
  };
}

export function getAllBangaloreCenters(): {
  centers: EWasteCenterWithZone[];
  centerPoint: [number, number];
} {
  return {
    centers: centersData,
    centerPoint: [12.9716, 77.5946],
  };
}

export function searchLocalities(query: string): { locality: string; zone: BangaloreZone }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return Object.entries(localityZoneMap)
    .filter(([key]) => key.includes(q))
    .map(([locality, zone]) => ({ locality, zone }))
    .slice(0, 6);
}

export function getZoneCounts(): Record<BangaloreZone, number> {
  const counts: Record<string, number> = {};
  for (const z of bangaloreZones) counts[z] = 0;
  for (const c of centersData) counts[c.zone]++;
  return counts as Record<BangaloreZone, number>;
}
