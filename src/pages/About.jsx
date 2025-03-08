import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="Article">
        <div className="details">
          <div className="title">About Robot</div>
          <article>
            Robot line follower pengantar barang merupakan salah satu inovasi
            teknologi yang memanfaatkan prinsip robotika dan otomatisasi untuk
            keperluan transportasi barang secara efisien. Robot ini dirancang
            untuk mengikuti jalur tertentu yang biasanya ditandai dengan garis
            pada permukaan lantai. Dengan menggunakan sensor, seperti sensor
            inframerah atau sensor optik, robot ini mampu mendeteksi dan
            mengikuti jalur tersebut secara mandiri.
          </article>
          <div className="subheader">Alasan Pembuatan</div>
          <article>
            Pembuatan robot ini didorong oleh kebutuhan untuk meningkatkan
            efisiensi dalam pengangkutan barang di berbagai lingkungan, seperti
            gudang, pabrik, atau bahkan area komersial. Penggunaan robot ini
            dapat membantu mengurangi ketergantungan pada tenaga kerja manusia,
            meminimalkan kesalahan operasional, dan meningkatkan produktivitas.
            Selain itu, robot ini juga sering diadopsi sebagai solusi ramah
            lingkungan karena bisa dirancang untuk menggunakan energi listrik
            yang lebih hemat dan bersih dibandingkan kendaraan berbahan bakar
            fosil.
          </article>
          <div className="subheader">Cara Kerja</div>
          <article>
            Cara kerja dari robot ini yaitu dengan kita menentukan robot harus
            berpindah kemana melalui website yang telah kami buat, setelah itu
            pengguna (user) harus menaruhkan barang apa yang akan dikirimkan di
            tempat yang telah di sediakan, dengan maximal bobot adalah 3kg.
            Bobot harus kami batasi agar tidak merusak robot dan juga agar tidak
            menurunkan kecepatan dari robot ini.
          </article>
        </div>
        <div className="logo">
          <img
            src="./images/robot.png"
            alt="Trailo Prototypes"
            className="trailo-pict"
            width={500}
            height={500}
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
