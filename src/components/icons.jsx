const base = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

export function WhatsappIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21l1.65-4.95A8.5 8.5 0 1 1 8.05 19L3 21z" />
      <path d="M8.5 9.5c0 3.5 3 6.5 6.5 6.5.6 0 1.1-.1 1.5-.3.4-.2.7-.7.6-1.1l-.3-1.1a.9.9 0 0 0-1-.6l-1.2.2a4.8 4.8 0 0 1-2.7-2.7l.2-1.2a.9.9 0 0 0-.6-1l-1.1-.3c-.4-.1-.9.2-1.1.6-.2.4-.3.9-.3 1.5z" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M18 6 6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export function ArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function PlayIcon(props) {
  return (
    <svg {...base} fill="currentColor" stroke="none" {...props}>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
