function FooterCopyright() {
  return (
    <div className="footer__copyright container-fluid bg-dark text-white-50 border-top py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p className="m-0">
              Copyright &copy;{' '}
              <a className="text-white" href="#">
                abstudies
              </a>
              . All Rights Reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <p className="m-0">
              Designed &amp; Developed by{' '}
              <a className="text-white" href="https://x.com/Pretom3With">
                Princee
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterCopyright;
