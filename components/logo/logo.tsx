interface logoSetting {
  addon:string
}
export default function Logo(props: logoSetting) {
  return (
    <span className={`logo text-bg-white ${props.addon}`}>کیوفای</span>
  );
}
