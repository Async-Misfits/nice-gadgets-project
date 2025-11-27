// import { Grid } from '../Grid/Grid';
// import { Typography } from '../../base/Typography/Typography';
// import { Button } from '../../base/Button/Button';
// import styles from './Footer.module.scss';
// import { Icon } from '../../base/icons';
// import { Divider } from '../../base/Divider/Divider';
// import { Link } from 'react-router';

// export const Footer = () => {
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <footer className={styles.footer}>
//       <Divider />
//       <Grid>
//         <div className={styles.topBar}>
//           <div className={styles.topContent}>
//             <Icon
//               name="logo"
//               width={89}
//               height={32}
//             />
//           </div>
//         </div>
//         <div className={styles.bottom}>
//           <div className={styles.bottomContent}>
//             <ul className={styles.links}>
//               <li>
//                 <a
//                   href="https://github.com/Async-Misfits/nice-gadgets-project"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Typography
//                     variant="body"
//                     uppercase
//                   >
//                     GitHub
//                   </Typography>
//                 </a>
//               </li>
//               <li>
//                 <Link to="/contacts">
//                   <Typography
//                     variant="body"
//                     uppercase
//                   >
//                     Contacts
//                   </Typography>
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/rights">
//                   <Typography
//                     variant="body"
//                     uppercase
//                   >
//                     Rights
//                   </Typography>
//                 </Link>
//               </li>
//             </ul>

//             <div className={styles.backToTop}>
//               <Button
//                 variant="inline"
//                 onClick={scrollToTop}
//               >
//                 Back to top
//               </Button>

//               <Button
//                 variant="square"
//                 iconButton={
//                   <Icon
//                     name="chevron-up"
//                     size={36}
//                   />
//                 }
//                 onClick={scrollToTop}
//               />
//             </div>
//           </div>
//         </div>
//       </Grid>
//     </footer>
//   );
// };



import { Grid } from '../Grid/Grid';
import { Typography } from '../../base/Typography/Typography';
import { Button } from '../../base/Button/Button';
import styles from './Footer.module.scss';
import { Icon } from '../../base/icons';
import { Divider } from '../../base/Divider/Divider';
import { Link } from 'react-router';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      <Divider />
      <Grid className={styles.footerGrid}>
        <div className={styles.logoCell}>
          <Icon
            name="logo"
            width={89}
            height={32}
          />
        </div>

        <ul className={styles.links}>
          <li>
            <a
              href="https://github.com/Async-Misfits/nice-gadgets-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography
                variant="body"
                uppercase
              >
                GitHub
              </Typography>
            </a>
          </li>
          <li>
            <Link to="/contacts">
              <Typography
                variant="body"
                uppercase
              >
                Contacts
              </Typography>
            </Link>
          </li>
          <li>
            <Link to="/rights">
              <Typography
                variant="body"
                uppercase
              >
                Rights
              </Typography>
            </Link>
          </li>
        </ul>

        <div className={styles.backToTop}>
          <Button
            variant="inline"
            onClick={scrollToTop}
          >
            Back to top
          </Button>

          <Button
            variant="square"
            iconButton={
              <Icon
                name="chevron-up"
                size={36}
              />
            }
            onClick={scrollToTop}
          />
        </div>
      </Grid>
    </footer>
  );
};