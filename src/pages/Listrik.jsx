import Layout from '../components/Layout';

const Listrik = () => {
  return (
    <Layout>
      <div className="Article">
        <div className="details">
          <div className="title">Teknik Otomasi Industri</div>
          <article>
            Teknik Otomasi Industri adalah sebuah bidang teknik yang mempelajari
            tentang perakitan sistem-sistem di dunia industri yang berbasis
            otomatis. Otomasi sendiri biasanya digunakan untuk mengendalikan
            mesin-mesin industri dan kontrol proses untuk menggantikan operator
            tenaga manusia. Otomasi Industri dapat bekerja di industri, instansi
            pemerintah dan swasta, lembaga penelitian, konsultan teknik, sektor
            pendidikan, dan berwirausaha
          </article>
          <div className="subheader">Sejarah</div>
          <ul>
            <li>1977 – 2012 : LISTRIK INDUSTRI</li>
            <li>2012 – Saat ini : TEKNIK OTOMASI INDUSTRI</li>
          </ul>
          <div className="subheader">Kerja Sama:</div>
          <article>
            Teknik Otomasi Industri di SMKN 1 Cimahi telah bekerja sama dengan
            beberapa industri, diantaranya:
          </article>
          <ul>
            <li>INDOFOOD CBP SUKSES MAKMUR Tbk</li>
            <li>PLN (PERSERO)</li>
            <li>FORSTA KALMEDIC GLOBAL</li>
            <li>NUTRIFOOD INDONESIA</li>
            <li>ARSY SOLUTION</li>
            <li>SAYAP MAS UTAMA (WINGS GROUP)</li>
            <li>MULTI INDOMANDIRI (WINGS GROUP)</li>
            <li>WIRA KUSUMA SEJAHTERA</li>
            <li>CAPRIFARMINDO LABORATORIES</li>
            <li>PT. GRANITOR SYSTEM APAC</li>
            <li>PT. JAYA KENCANA</li>
            <li>POLITEKNIK MANUFAKTUR NEGERI BANDUNG</li>
          </ul>
        </div>
        <div className="logo">
          <img
            src="./images/toi.png"
            alt="Teknik Otomasi Industri"
            width={500}
            height={600}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Listrik;
