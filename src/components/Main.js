import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import photo1 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (1).jpg";
import photo2 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (2).jpg";
import photo3 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (3).jpg";
import photo4 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (4).jpg";
import photo5 from "../kuruyemis/PHOTO-2021-08-09-20-47-34 (5).jpg";
import photo6 from "../kuruyemis/PHOTO-2021-08-09-20-47-34.jpg";
import photo7 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (1).jpg";
import photo8 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (2).jpg";
import photo9 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (3).jpg";
import photo10 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (4).jpg";
import photo11 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (5).jpg";
import photo12 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (6).jpg";
import photo13 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (7).jpg";
import photo14 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (8).jpg";
import photo15 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (9).jpg";
import photo16 from "../kuruyemis/PHOTO-2021-08-09-20-47-35 (10).jpg";
import photo17 from "../kuruyemis/PHOTO-2021-08-09-20-47-35.jpg";
import photo18 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (1).jpg";
import photo19 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (2).jpg";
import photo20 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (3).jpg";
import photo21 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (4).jpg";
import photo22 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (5).jpg";
import photo23 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (6).jpg";
import photo24 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (7).jpg";
import photo25 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (8).jpg";
import photo26 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (9).jpg";
import photo27 from "../kuruyemis/PHOTO-2021-08-09-20-47-36 (10).jpg";
import photo28 from "../kuruyemis/PHOTO-2021-08-09-20-47-36.jpg";
import photo29 from "../kuruyemis/PHOTO-2021-08-09-20-47-37 (1).jpg";
import photo30 from "../kuruyemis/PHOTO-2021-08-09-20-47-37.jpg";
import Erzincan_tulum from "../kuruyemis/Erzinjan_tulum_peynir.PNG";
import Kabak_chekirdegi from "../kuruyemis/Kabak_chekirdegi.PNG";
import Tarhana_chips from "../kuruyemis/Tarhana_chips.PNG";
import Nar_eksisi from "../kuruyemis/Nar_eksisi.PNG";
import refa_gida from "../kuruyemis/refa_gida.png";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const items = [
  { id: 1, serial_number:"001",image: photo1, name:'Antep fistikli fitil lokum', description: "Doğal pancardan üretilen Sütlü Antep fıstıklı fitil lokumlarımız farklı görüntüsü ve tadıyla keyifle tüketebileceğiniz, kültürümüzün vazgeçilmez lezzetlerinden birisi haline gelmiştir. Lokumlarımız doğal yollar ile üretilir ve en taze katkısız haliyle siz müşterilerimize sunulmak için hazırlanır.", price: 13 },
  { id: 2, serial_number:"002",image: photo2, name:'Sumak', description: "Adana dan getirdigimiz meşhur sumağimiz ekşimsi tadı ve mükemmel kokusuyla mutfağınızın vazgeçilmezi olacak ", price: 10 },
  { id: 3, serial_number:"003",image: photo3, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 4, serial_number:"004",image: photo4, name:'Fistik Ezmesi', description: "Gaziantepte yetişen Antep Fıstıklarının doğal yöntemlerle ezilmesi ve belirli oranda şeker ile karıştırılması sonucu hazırlanan bir şekerlemiz için", price: 14 },
  { id: 5, serial_number:"005",image: photo5, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 6, serial_number:"006",image: photo6, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 7, serial_number:"007",image: photo7, name:'Fistikli, Meyveli Fitil Lokum', description: "Fıstıklı , meyveli fitil lokum ; hem de glikoz kullanılmadan saf şeker pancarı ile üretilen bu lezzeti sizler de tatmak ister misiniz ⁉️", price: 13 },
  { id: 8, serial_number:"008",image: photo8, name:'Manisa Uç Yaprağı Salamura', description: "Manisa Uç Yaprağı Salamurasi. Hem doğal, hem ince damarlı, hem kolay pişer olmalı diyorsanız isteyin gönderelim ", price: 10 },
  { id: 9, serial_number:"009",image: photo9, name:'Baklava Ozel Kare', description: "Tatlı dendiğinde ilk akla gelen tatlıların yıldızı olan baklavadır. Fıstık lezzetini ve aromasını çok yoğun bir şekilde hissedebileceğiniz bu muhteşem lezzet fıstıklı baklava tatlısını tamamı doğal ve taze malzemeler ile üretip sizlere ulaştırılıyoruz.", price: 19 },
  { id: 10, serial_number:"010",image: photo10, name:'Fıstık Ezmesi(Fistik Dolama)', description: "Antep' in en kaliteli iç fıstığını ve doğal pancar şekerini sevgiyle yoğurduk , baklavayı aratmayacak bu lezzetle sizde tanışmak ister misiniz ?", price: 20 },
  { id: 11, serial_number:"011",image: photo11, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 12, serial_number:"012",image: photo12, name:'Yeşil Zeytin', description: "Meyveleri iri ve çekirdekleri orta büyüklükte olup, %24,7 oranında yağ içerir. Zeytinyağı ise altın sarısı renginde, meyve kokusu içeren, hoş kokulu, kimyasal ve duyusal özellikleri bakımından birinci sınıfta yer alan zeytindir.", price: 9 },
  { id: 13, serial_number:"013",image: photo13, name:'Antep Fıstıklı Muska', description: "Gaziantep yöresel üzüm pekmezinden elde ettiğimiz pestilimiz ve Antep fıstığının birleşmesiyle ortaya çıkan nefis bir lezzet. farklı gramaj seçenekleri ile ile bir tıkla kapında.", price: 13 },
  { id: 14, serial_number:"014",image: photo14, name:'Fındıklı Rulo Pestil Sarması', description: "Gümüşhane’nin yöresel lezzetlerinden muhteşem lezzete sahip olan pestil sarması , pestilin kendine has lezzetini ve aramasını net bir şekilde hissetmenizi sağlıyor. Özellikle fındık tadından hoşlananları adeta mest eden sağlıklı bir atıştırmalık .", price: 13 },
  { id: 15, serial_number:"015",image: photo15, name:'Midye Baklava', description: "Fıstıklı Baklava’nın en sevilenlerinden, baklava’nın yeni yüzü “Fıstıklı Midye Baklava ” tatlıseverlerin önce gözlerini Sonra Kalplerini Mutlu Ediyor.", price: 19 },
  { id: 16, serial_number:"016",image: photo16, name:'Kahramanmaras toz biber', description: "Yemeklerinizin lezzetine lezzet katacak eşsiz aroması ve acısı ile Kahramanmaraş'ın meşhur toz biberini kendi diyarından sofranıza getiriyoruz.", price: 10 },
  { id: 17, serial_number:"017",image: photo17, name:'Gaziantep usulü cevizli baklava', description: "Antep yöresine has lezzeti ve işçiliğiyle beğenilen tatlılar arasında bulunan Gaziantep usulü cevizli baklavamızı sizlere de ikram etmek istiyoruz. Cevizli baklavamız hazırlanırken içerisinde kullanılan yerli üretim cevizler kullanılmıştır.", price: 13 },
  { id: 18, serial_number:"018",image: photo18, name:'Kabuksuz Antep Fistigi', description: "Birinci kalite Antep fıstığının kabuklarından ayrıştırılmayla elde edilen yeşilinin en güzel tonuna sahip Boz iç fıstıklarımızı nefis kokusu ve tadıyla taptaze sizlere sunuyoruz.", price: 13 },
  { id: 19, serial_number:"019",image: photo19, name:'Domates Salcasi Katkisiz Guneste Kurutulmus', description: "Antalya'lı kadınların el emeğiyle yapılmış katkısız ve %100 doğal güneşte kurutulmuş domates salçası.", price: 11 },
  { id: 20, serial_number:"020",image: photo20, name:'Draje', description: "Lorem ipsum", price: 13 },
  { id: 21, serial_number:"021",image: photo21, name:' Dağ İnciri', description: "Egenin incisi Aydın İncirliova'nın dağlık bölgelerinde yetişen Natürel Dağ İnciri ve %100 doğal kendi dalında kurumuştur.", price: 13 },
  { id: 22, serial_number:"022",image: photo22, name:'Cevizli Sucuk', description: "Anadolu tatlı kültürünün önemli bir öğesi Cevizli Sucuk ; üzümden elde edilen şıra ve ceviz kullanilarak yapılır , bazı yörelerde Köme ve Orcik adıyla bilinen bu enfes tat bir tıkla kapında", price: 12 },
  { id: 23, serial_number:"023",image: photo23, name:'Tarhana', description: "Miss gibi Tarhana. Kendi el emeğimizle sevgimizi katarak ürettiğimiz tarhanalarımızı tüm dünyaya ulaştırıyoruz.", price: 10 },
  { id: 24, serial_number:"024",image: photo24, name:'Antep Fistigi', description: "Damakların vazgeçilmez lezzeti kavrulmuş Antep fıstığı, günün her saatinde keyifle tüketilebilecek besleyici bir atıştırmalık olarak karşımıza çıkıyor. Tamamen doğal içeriğiyle hiçbir katkı ve koruyucu madde bünyesinde bulunmayan Antep Fıstıklarımız duble boy ve az tuzlu kavrulmuş olarak hazırlanmaktadır.", price: 13 },
  { id: 25, serial_number:"025",image: photo25, name:'Saf Zeytinyağı', description: "100% Saf Soğuk Sıkım Natürel Sızma Zeytinyağımız ile sofralarınızda lezzet hikayelerinize eşlik ediyoruz.Herhangi bir kimyasal işlem görmeden, katkı maddesi eklenmeden doğrudan tüketime uygun üretilmiştir. Yemeklere verdiği güzel tat ve kokunun dışında, içerisindeki vitaminler ile sağlıklı bir yaşam isteyen insanlar için bir tıkla kapınızdayız…", price: 10 },
  { id: 26, serial_number:"026",image: photo26, name:'Acve Hurması', description: "Acve Hurması Peygamber hurması olarak bilinen küçük taneli çok lezzetli ve kaliteli bu hurma, erik benzeri bir tada sahip, nefis bir şekilde yumuşak ve meyvemsidir.", price: 13 },
  { id: 27, serial_number:"027",image: photo27, name:'Üzüm Pestili', description: "Gümüşhane 'nin yöresel lezzetlerinden %100 doğal üzüm pekmezinden elde ettiğimiz üzüm pestilimizi en güzel şekilde paketleyip sizlerin beğenisine sunuyoruz. Hiçbir katkı maddesi içermemektedir.", price: 10 },
  { id: 28, serial_number:"028",image: photo28, name:'Findik', description: "Giresun İlinde yetişen ve Dünya'nın en lezzetli fındıkları olarak kabul edilen Giresun'un Tombul Fındığı katkısız bir şekilde özenle seçilip, elenip, paketlenmesini yapıp kaliteden ödün vermeden sizlere ulaştırmaya devam ediyoruz.", price: 13 },
  { id: 29, serial_number:"029",image: photo29, name:'Fıstıklı Ballı Sarma', description: "İncecik serilmiş dut pestili üzerine bal kaplandıktan sonra fıstık serpilerek rulo yapıldıktan sonra iki parmak kalınlığında kesilen ve enfes bir tadı olan, bu özel atıştırmalık Fıstıklı Ballı Sarma Pestilimiz bir tıkla kapınızda .", price: 13 },
  { id: 30, serial_number:"030",image: photo30, name:'Havuç Dilimi Baklava', description: "Ağızda dağılan Havuç Dilim Baklava damakta bıraktığı eşsiz tatla akılları başlardan alıyor. Boyutuyla baklavaya doyamayanlara!", price: 19 },
  { id: 31, serial_number:"031",image: refa_gida, name:'Çakıl taşı çikolata', description: "Çakıl taşı çikolata kalpleri yumuşatan çikolata", price: 13 },
  { id: 32, serial_number:"032",image: Nar_eksisi, name:'Tatlı ve ekşinin mükemmel uyumu Nar ekşisi', description: "Her şeyin yapaylaştığı dünyamızda gerçek aroması ve lezzeti ile miss gibi nar eksilerimizde hiç bir koruyucu madde kullanmıyoruz", price: 13 },
  { id: 33, serial_number:"033",image: Erzincan_tulum, name:'Erzincan tulum peyniri', description: "Esas üretimi gerçekleştiren ve Tunceli’de bulunan Şavak aşiretinin ismiyle anılan bu peynir, günümüzde ticaretinin Erzincan’da ön plana çıkması nedeniyle ülke genelinde Erzincan tulum peyniri olarak tanınmıştır. Erzincan tulum peynirini farklı hale getiren başlıca özellik bölgedeki obruk olarak isimlendirilen içerisinde kendine özgü yerleşik bir küf florası bulunan bu mağarada 90-120 gün olgunlaştırılmasıdır. Peynir yapımında doğal şirden mayası ve koyun sütü kullanılmaktadır.", price: 13 },
  { id: 34, serial_number:"034",image: Kabak_chekirdegi, name:'Kabak Cekirdegi', description: "Kalbe ve damarlarına iyi gelir.İçinde bulundurduğu çinko sayesinde kemik oluşumu için önemli bir magnezyum kaynağıdır. E vitamini barındırdığı için güçlü bir antioksidandır😋", price: 13 },
  { id: 35, serial_number:"035",image: refa_gida, name:'Zeytin Siyah', description: "Lorem ipsum", price: 10 },
  { id: 36, serial_number:"036",image: refa_gida, name:'Antep Peyniri', description: "Lorem ipsum", price: 13 },
  { id: 37, serial_number:"037",image: refa_gida, name:'Peynir Canakkale Ezine', description: "Lorem ipsum", price: 12 },
  { id: 38, serial_number:"038",image: refa_gida, name:'Peynir Kars Kasar', description: "Lorem ipsum", price: 13 },
  { id: 39, serial_number:"039",image: refa_gida, name:'Ev Yapimi Biber Salcasi', description: "Lorem ipsum", price: 10 },
  { id: 40, serial_number:"040",image: refa_gida, name:'Isot Biberi', description: "Lorem ipsum", price: 10 },
  { id: 41, serial_number:"041",image: refa_gida, name:'Fistikli Cikolatali Bohca', description: "Lorem ipsum", price: 12 },
  { id: 42, serial_number:"042",image: refa_gida, name:'FindikliPestil+Rulo Findik Ezmesi+Sarma Pestil Cesitleri', description: "Lorem ipsum", price: 12},
  { id: 43, serial_number:"043",image: refa_gida, name:'Burma Kadaif Fistikli', description: "Taze tel kadayıftan tereyağ ve boz iç antep fıstığı kullanılarak yapılan, ağızda çıtır çıtır dağılan kadayıflı tatlıları kim sevmez ki?", price: 17 },
  { id: 44, serial_number:"044",image: refa_gida, name:'Baklava Ozel Sobiyet', description: "Lorem ipsum", price: 19 },
  { id: 45, serial_number:"045",image: refa_gida, name:'Baklava Fistikli', description: "Lorem ipsum", price: 18 },
  { id: 46, serial_number:"046",image: refa_gida, name:'Yufka El Yapimi', description: "Lorem ipsum", price: 17 },
  { id: 47, serial_number:"047",image: refa_gida, name:'Peynir Kars Gavyeri', description: "Lorem ipsum", price: 19 },
  { id: 48, serial_number:"048",image: refa_gida, name:'Kadaif El Yapimi', description: "Lorem ipsum", price: 10 },
  { id: 49, serial_number:"049",image: refa_gida, name:'Ici Antep Fistik-Disi Cikolatali Draje', description: "Lorem ipsum", price: 14 },
  { id: 50, serial_number:"050",image: refa_gida, name:'Ici-Badem Disi-Cikolatali Draje', description: "Lorem ipsum", price: 13 },
  { id: 51, serial_number:"051",image: refa_gida, name:'Ici-Findik Disi-Cikolatali Draje', description: "Lorem ipsum", price: 13 },
  { id: 52, serial_number:"052",image: refa_gida, name:'Kimyon', description: "Türk mutfağının vazgeçilmez baharatlarından olan Kimyonun yararı saymakla bitmez ;", price: 11 },
  { id: 53, serial_number:"053",image: refa_gida, name:'Karabiber', description: "Antalya yöresinde yetişen bitkilerin kurutulup öğütülmesiyle elde edilen taze çekilmiş karabiber gerek dünya mutfağında gerekse Türk mutfağında en sık kullanılan baharatlardan biridir.", price: 11 },
  { id: 54, serial_number:"054",image: refa_gida, name:'Nane', description: "Antalya'nın güzel ikliminden getirdiğimiz enfess nanemiz yemeklerinize lezzet ve sağlık katacak", price: 10 },
  { id: 55, serial_number:"055",image: refa_gida, name:'Pekmez Keceboynuzu/Andiz/Karadut', description: "Lorem ipsum", price: 14 },
  { id: 56, serial_number:"056",image: refa_gida, name:'Kurumeyve Seftali/Erik/Mango', description: "Lorem ipsum", price: 14 },
  { id: 57, serial_number:"057",image: refa_gida, name:'Uzum Pekmez', description: "Lorem ipsum", price: 14 },
  { id: 58, serial_number:"058",image: Tarhana_chips, name:'Maras Chips Tarhanasi', description: "Lorem ipsum", price: 13 },
  { id: 59, serial_number:"059",image: refa_gida, name:'Draje / Disi meyveli Cikolata Kapli Bademli(elma,portokal,kiwi)', description: "Lorem ipsum", price: 13 },
  { id: 60, serial_number:"060",image: refa_gida, name:'Draje / Disi meyveli(elma,portokal,kiwi) Cikolata Kapli Findikli Draje', description: "Lorem ipsum", price: 13 },
  { id: 61, serial_number:"061",image: refa_gida, name:'Draje / Disi meyveli(elma,portokal,kiwi) Cikolata Kapli Antep Fistikli Draje', description: "Lorem ipsum", price: 15 },
  { id: 62, serial_number:"062",image: refa_gida, name:'Baharatlar (kofte/sucuk/pastirma baharat)', description: "Lorem ipsum", price: 11 },
  { id: 63, serial_number:"063",image: refa_gida, name:'Cecil Peynir', description: "Lorem ipsum", price: 13 },
  { id: 64, serial_number:"064",image: refa_gida, name:'Deri Tulum Peynir(Van yoresi otlu)', description: "Lorem ipsum", price: 13 },
  // { id: 65, serial_number:"035",image: refa_gida, name:'Zeytin Siyah', description: "Lorem ipsum", price: 10 },
  // { id: 66, serial_number:"035",image: refa_gida, name:'Zeytin Siyah', description: "Lorem ipsum", price: 10 },
 
];



const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              REFA GIDA (USA)
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              FRESH ITEMS FROM TURKEY TO USA ONLY IN ONE WEEK
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {items.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: "56.25%",
                    }}
                    image={card.image}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name}
                    </Typography>
                    <Typography>
                      {card.description}
                    </Typography>
                    <Typography>
                    kod:{card.serial_number}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
