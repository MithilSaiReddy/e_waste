import { useState } from "react";
import {
  X, MapPin, Clock, Phone, Mail, CheckCircle, Star, Truck, Building2, Share2,
} from "lucide-react";
import { Drawer } from "vaul";
import { useMediaQuery } from "../hooks/useMediaQuery";

export interface EWasteCenter {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  email: string;
  hours: string;
  acceptedItems: string[];
  certifications: string[];
  type?: string;
  pickup?: string;
  rating?: string;
}

interface CenterDetailsProps {
  center: EWasteCenter;
  onClose: () => void;
}

function CenterContent({ center, onClose }: CenterDetailsProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`;
    const text = `♻️ E-Waste Collection Center\n\n${center.name}\n${center.address}\n\nRecycle your e-waste responsibly`;

    if (navigator.share) {
      await navigator.share({ title: center.name, text, url: mapsUrl });
    } else {
      await navigator.clipboard.writeText(`${text}\n\n${mapsUrl}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-card w-full max-h-[90vh] overflow-y-auto">
      <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between z-10">
        <div className="flex-1 min-w-0">
          <h2 className="truncate">{center.name}</h2>
          {center.rating && (
            <div className="flex items-center gap-1 mt-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-muted-foreground">{center.rating} rating</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={handleShare}
            className="p-2 hover:bg-accent rounded-full transition-colors relative"
            title="Share"
          >
            <Share2 className="w-5 h-5" />
            {copied && (
              <span className="absolute -top-1 -right-1 text-[10px] bg-green-500 text-white px-1.5 py-0.5 rounded-full whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>
          <button onClick={onClose} className="p-2 hover:bg-accent rounded-full flex-shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {(center.type || center.pickup) && (
          <div className="grid md:grid-cols-2 gap-4">
            {center.type && (
              <div className="flex gap-3">
                <Building2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h4>Center Type</h4>
                  <p className="text-muted-foreground text-sm mt-1">{center.type}</p>
                </div>
              </div>
            )}
            {center.pickup && (
              <div className="flex gap-3">
                <Truck className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h4>Pickup Service</h4>
                  <p className="text-muted-foreground text-sm mt-1">{center.pickup}</p>
                </div>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-3">
          <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
          <div>
            <h3>Address</h3>
            <p className="text-muted-foreground mt-1">{center.address}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
            <div>
              <h4>Phone</h4>
              {center.phone.includes("Book") || center.phone.includes("appointment") ? (
                <p className="text-muted-foreground text-sm mt-1">{center.phone}</p>
              ) : (
                <a
                  href={`tel:${center.phone.replace(/[^0-9+]/g, "")}`}
                  className="text-blue-500 hover:underline text-sm"
                >
                  {center.phone}
                </a>
              )}
            </div>
          </div>
          {center.email && center.email !== "N/A" && (
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
              <div>
                <h4>Email</h4>
                <a
                  href={`mailto:${center.email}`}
                  className="text-purple-500 hover:underline break-all text-sm"
                >
                  {center.email}
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3">
          <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
          <div>
            <h3>Operating Hours</h3>
            <p className="text-muted-foreground mt-1">{center.hours}</p>
          </div>
        </div>

        <div>
          <h3 className="mb-3">Accepted E-Waste Items</h3>
          <div className="flex flex-wrap gap-2">
            {center.acceptedItems.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3">Certifications & Features</h3>
          <div className="space-y-2">
            {center.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          {center.phone.includes("Book") || center.phone.includes("appointment") ? (
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl transition-all text-center font-medium"
            >
              Get Directions
            </a>
          ) : (
            <>
              <a
                href={`tel:${center.phone.replace(/[^0-9+]/g, "")}`}
                className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl transition-all text-center font-medium"
              >
                Call to Request Pickup
              </a>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl transition-all text-center font-medium"
              >
                Get Directions
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function CenterDetails({ center, onClose }: CenterDetailsProps) {
  const isMobile = useMediaQuery("(max-width: 767px)");

  if (isMobile) {
    return (
      <Drawer.Root open onClose={onClose}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/50 z-[1000]" onClick={onClose} />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 z-[1001] bg-card rounded-t-2xl outline-none max-h-[92vh]">
            <div className="mx-auto w-10 h-1.5 bg-muted-foreground/30 rounded-full my-3" />
            <CenterContent center={center} onClose={onClose} />
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    );
  }

  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-card rounded-2xl max-h-[90vh] overflow-hidden shadow-2xl">
        <CenterContent center={center} onClose={onClose} />
      </div>
    </div>
  );
}
