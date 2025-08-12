import { pageLinks } from "../data";
import PageLink from "./PageLink";
const PageLinks = ({groupName, itemName}) => {
  return (
     <ul className={groupName} >
        {<pageLinks.map((link) => (
            <PageLind1 key={link.id} { ... link} itemName={itemName} />
        ))
        }
     </ul>
  );
}

export default PageLinks;