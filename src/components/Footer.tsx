import { Link } from 'react-router-dom'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <img src="/brand/vcg-logo-black.png" alt="" width={36} height={36} />
          <div>
            <p className="footer__name">Virginia Consulting Group</p>
            <p className="footer__tag">University of Virginia</p>
          </div>
        </div>

        <div className="footer__cta">
          <p>Explore</p>
          <Link to="/exec">Executive board →</Link>
          <Link to="/clients">Client services →</Link>
          <Link to="/apply">Application process →</Link>
        </div>
      </div>

      <div className="footer__legal">
        <p>© {new Date().getFullYear()} Virginia Consulting Group. All rights reserved.</p>
        <p className="footer__disclaimer">
          Although this organization has members who are University of Virginia students and may
          have University employees associated or engaged in its activities and affairs, the
          organization is not a part of or an agency of the University. It is a separate and
          independent organization which is responsible for and manages its own activities and
          affairs. The University does not direct, supervise or control the organization and is not
          responsible for the organization’s contracts, acts or omissions.
        </p>
      </div>
    </footer>
  )
}
