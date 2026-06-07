import { X, MapPin, Clock, Phone, Mail, CheckCircle, ArrowLeft, Star, Truck, Building2 } from "lucide-react";

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

export function CenterDetails({ center, onClose }: CenterDetailsProps) {
  return (
    <div className="fixed inset-0 z-[1000] bg-black/50 flex items-end md:items-center justify-center p-0 md:p-4">
      <div className="bg-card w-full md:max-w-2xl md:rounded-lg rounded-t-2xl max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom md:slide-in-from-bottom-0 md:fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <button
            onClick={onClose}
            className="md:hidden p-2 hover:bg-accent rounded-full"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1 text-center md:text-left">
            <h2>{center.name}</h2>
            {center.rating && (
              <div className="flex items-center gap-1 justify-center md:justify-start mt-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-muted-foreground">{center.rating} rating</span>
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="hidden md:block p-2 hover:bg-accent rounded-full"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Type and Pickup Info */}
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

          {/* Address */}
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
            <div>
              <h3>Address</h3>
              <p className="text-muted-foreground mt-1">{center.address}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex gap-3">
              <Phone className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h4>Phone</h4>
                <a
                  href={`tel:${center.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-blue-500 hover:underline text-sm"
                >
                  {center.phone}
                </a>
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

          {/* Hours */}
          <div className="flex gap-3">
            <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3>Operating Hours</h3>
              <p className="text-muted-foreground mt-1">{center.hours}</p>
            </div>
          </div>

          {/* Accepted Items */}
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

          {/* Certifications */}
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

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href={`tel:${center.phone.replace(/[^0-9+]/g, '')}`}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg transition-colors text-center"
            >
              Call to Request Pickup
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-colors text-center"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
