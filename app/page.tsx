import Image from 'next/image';

const assetBase = process.env.GITHUB_PAGES === 'true' ? '/sort-it-vr' : '';
const asset = (name: string) => `${assetBase}/${name}`;

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Ana menü">
        <a className="brand" href="#top" aria-label="Sort It! ana sayfa">
          <Image src={asset('sortit-logo.png')} alt="Sort It!" width={220} height={90} priority />
        </a>
        <div className="navLinks">
          <a href="#nasil">Nasıl Oynanır?</a>
          <a href="#ozellikler">Özellikler</a>
          <a href="#ekip">Ekip</a>
        </div>
        <a className="navCta" href="#deneyimle">Oyunu Keşfet <span>↗</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow" />
        <div className="orbit orbitOne" />
        <div className="orbit orbitTwo" />
        <div className="heroCopy">
          <div className="eyebrow"><i /> VR • Hız • Sezgi</div>
          <h1>DÜZENİ<br /><span>HİSSET.</span></h1>
          <p>
            Nesneyi salla, başına yaklaştır veya kontrolcüdeki titreşimi hisset.
            Sort It! reflekslerini sanal gerçekliğin içinde sınar.
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#deneyimle">VR&apos;DA DENE <b>→</b></a>
            <a className="textButton" href="#nasil"><span className="play">▶</span> NASIL OYNANIR?</a>
          </div>
          <div className="platform"><span>VR</span><p><b>BAŞLIĞINI TAK</b><br />Vardiyanı başlat</p></div>
        </div>

        <div className="heroVisual" aria-label="Sort It! oyun karakteri ve renkli bloklar">
          <div className="statusPill"><i /> SİSTEM ÇEVRİMİÇİ</div>
          <div className="floatingCube cubePink" />
          <div className="floatingCube cubeOrange" />
          <div className="floorShadow" />
          <Image
            className="character"
            src={asset('sortit-character.png')}
            alt="Renkli blokları kutulara ayıran Sort It! karakteri"
            width={1024}
            height={1024}
            priority
          />
          <div className="scoreCard"><small>DOĞRU YERLEŞİM</small><strong>+08</strong><div><i /><i /><i /></div></div>
        </div>

        <div className="scrollHint"><span>SCROLL</span><i /></div>
      </section>

      <section className="signalStrip" aria-label="Oyun özellikleri">
        <span>HIZLI KARAR</span><i>✦</i><span>ÇOKLU DUYU</span><i>✦</i><span>VR DENEYİMİ</span><i>✦</i><span>İKİ KİŞİLİK REKABET</span><i>✦</i><span>HIZLI KARAR</span>
      </section>

      <section className="howSection" id="nasil">
        <div className="sectionIntro">
          <div>
            <span className="kicker">01 / OYNANIŞ</span>
            <h2>İPUCUNU YAKALA.<br /><em>DOĞRU YERE BIRAK.</em></h2>
          </div>
          <p>Her obje, doğru etkileşim uygulandığında ipucunu açığa çıkarır. Nesneyi salla, başına yaklaştır ya da kontrolcüdeki titreşimi hisset; sonra süre dolmadan doğru kutuya yerleştir.</p>
        </div>

        <div className="signalGrid">
          <article className="signalCard soundCard">
            <div className="signalNumber">01</div>
            <div className="signalIcon soundIcon"><span>♪</span><i /><i /></div>
            <div><small>NESNEYİ SALLA</small><h3>SES</h3><p>Nesneyi salladığında ses çıkıyorsa sesli kategoriye aittir.</p></div>
          </article>
          <article className="signalCard glowCard">
            <div className="signalNumber">02</div>
            <div className="signalIcon glowIcon"><span>✦</span></div>
            <div><small>BAŞINA YAKLAŞTIR</small><h3>PARILTI</h3><p>Nesneyi başına yaklaştırdığında parlıyorsa parlak kategoriye aittir.</p></div>
          </article>
          <article className="signalCard rumbleCard">
            <div className="signalNumber">03</div>
            <div className="signalIcon rumbleIcon"><span>▰</span><i /><i /></div>
            <div><small>AĞIRLIĞI HİSSET</small><h3>TİTREŞİM</h3><p>Ağır nesneyi tuttuğunda kontrolcü titrer; bu titreşim ağır kategori ipucudur.</p></div>
          </article>
        </div>
      </section>

      <section className="gameplaySection" id="ozellikler">
        <div className="gameplayStage">
          <div className="stageTop"><span>VARDİYA // 08:42</span><span className="liveDot">CANLI SİMÜLASYON</span></div>
          <div className="stageContent">
            <div className="bin binBlue"><span>SESLİ</span><i /></div>
            <div className="sortObject"><span>?</span></div>
            <div className="bin binOrange"><span>PARLAK</span><i /></div>
            <div className="bin binGray"><span>AĞIR</span><i /></div>
          </div>
          <div className="stageScore"><small>SIRALAMA</small><b>#01</b><span>2.450 PUAN</span></div>
          <div className="stageCaption">ETKİLEŞ • İPUCUNU ÇÖZ • YERLEŞTİR</div>
        </div>

        <div className="gameplayCopy">
          <span className="kicker light">02 / DENEYİM</span>
          <h2>HER SANİYE<br /><em>ÖNEMLİ.</em></h2>
          <p>Vardiya başladığında nesneleri salla, başına yaklaştır ve ağırlık titreşimini hisset. Ortaya çıkan ipucunu yorumlayıp doğru kutuya yerleştir.</p>
          <ul>
            <li><b>90</b><span>SANİYELİK<br />VARDİYALAR</span></li>
            <li><b>03</b><span>FARKLI<br />İPUCU TİPİ</span></li>
            <li><b>02</b><span>OYUNCULU<br />KAPIŞMA</span></li>
          </ul>
        </div>
      </section>

      <section className="duelSection" id="deneyimle">
        <div className="duelCopy">
          <span className="kicker">03 / REKABET</span>
          <h2>AYNI ANDA.<br /><em>AYNI HEDEF.</em></h2>
          <p>Rakibinle aynı vardiyaya gir. Nesneleri doğru kutulara yerleştir, hatalardan kaçın ve süre bittiğinde zirvede kal.</p>
          <div className="featureList">
            <div><span>01</span><p><b>GERÇEK ZAMANLI DÜELLO</b><small>İki oyuncu, eş zamanlı tempolu mücadele.</small></p></div>
            <div><span>02</span><p><b>HER TUR YENİ MEYDAN OKUMA</b><small>Değişen obje akışıyla ezberi boz.</small></p></div>
          </div>
        </div>
        <div className="duelVisual">
          <div className="versus"><span>OYUNCU 1</span><b>VS</b><span>OYUNCU 2</span></div>
          <div className="screenFrame">
            <Image src={asset('sortit-gameplay.jpeg')} alt="Sort It! VR oyun içi görüntüsü" width={1600} height={900} />
            <div className="screenGlare" />
          </div>
          <div className="winnerTag">★ DOĞRU +100</div>
        </div>
      </section>

      <section className="teamSection" id="ekip">
        <div className="teamHeading">
          <span className="kicker light">04 / EKİP</span>
          <h2>OYUNU<br /><em>KURANLAR.</em></h2>
        </div>
        <div className="teamCards">
          <article><span>DA</span><div><small>GELİŞTİRİCİ</small><h3>DENİZ AKKOYUN</h3></div><a className="linkedinLink" href="https://www.linkedin.com/in/deniz-akkoyun" target="_blank" rel="noopener noreferrer" aria-label="Deniz Akkoyun LinkedIn profilini aç"><b>in</b><i>LinkedIn</i><em>↗</em></a></article>
          <article><span>ME</span><div><small>GELİŞTİRİCİ</small><h3>MUHAMMED ERYILMAZ</h3></div><a className="linkedinLink" href="https://www.linkedin.com/in/muhery" target="_blank" rel="noopener noreferrer" aria-label="Muhammed Eryılmaz LinkedIn profilini aç"><b>in</b><i>LinkedIn</i><em>↗</em></a></article>
          <article><span>EA</span><div><small>GELİŞTİRİCİ</small><h3>EKREM EFE ARKUN</h3></div><a className="linkedinLink" href="https://www.linkedin.com/in/ekremefearkun" target="_blank" rel="noopener noreferrer" aria-label="Ekrem Efe Arkun LinkedIn profilini aç"><b>in</b><i>LinkedIn</i><em>↗</em></a></article>
          <article className="advisor"><span>BÇ</span><div><small>DANIŞMAN</small><h3>DOÇ. DR. BARIŞ ÇUKURBAŞI</h3></div><a className="linkedinLink" href="https://www.linkedin.com/in/barocraft" target="_blank" rel="noopener noreferrer" aria-label="Barış Çukurbaşı LinkedIn profilini aç"><b>in</b><i>LinkedIn</i><em>↗</em></a></article>
        </div>
        <div className="labNote"><b>XRLAB</b><span>Manisa Celal Bayar Üniversitesi<br />Extended Reality Laboratory</span></div>
      </section>

      <section className="finalCta">
        <div className="ctaShapes"><i /><i /><i /></div>
        <Image src={asset('sortit-logo.png')} alt="Sort It!" width={640} height={260} />
        <h2>VARDİYAYA<br />HAZIR MISIN?</h2>
        <p>Başlığını tak. İpuçlarını yakala. Düzeni herkesten hızlı kur.</p>
        <a href="#top" className="ctaButton">OYUNU KEŞFET <span>↗</span></a>
      </section>

      <footer>
        <a className="footerLogo" href="#top" aria-label="Sort It! ana sayfa"><Image src={asset('sortit-logo.png')} alt="Sort It!" width={220} height={90} /></a>
        <p>© 2026 SORT IT! — XRLAB</p>
        <a href="#top">YUKARI DÖN ↑</a>
      </footer>
    </main>
  );
}
