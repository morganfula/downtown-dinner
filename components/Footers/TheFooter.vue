<template>
  <footer class="footer" id="footer">
    <h2 class="big">BLACKBIRD</h2>
    <div class="grid-container">
      <div class="address">
        <h3>
          ADRESSE
        </h3>
        <p>Downtown Diner.</p>
        <p>Route de Bel-Air 1</p>
        <p>1003 Lausanne</p>
        <p>Switzerland</p>
      </div>
      <div class="hours">
        <h3>
          HORAIRES
        </h3>
        <div>
          <p><strong>du Lundi au Mercredi</strong></p>
          <p>08.30 - 22.30</p>
          <p>Cuisine: 09.00-14.00 / 18.00-21.30</p>
        </div>

        <div>
          <p><strong>Jeudi et Vendredi</strong></p>
          <p>08.30 - 00.00</p>
          <p>Cuisine: 09.30-14.00 / 18.00-21.30</p>
        </div>

        <div>
          <p><strong>Samedi</strong></p>
          <p>08.30 - 00.00</p>
          <p>Cuisine: 09.00-15.00 (BRUNCH) / 18.00-21.30</p>
        </div>

        <div>
          <p><strong>Dimanche</strong></p>
          <p>08.30 - 16.00</p>
          <p>Cuisine: 09.00 - 15.00 (BRUNCH)</p>
        </div>
      </div>
      <div class="map">
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=6.629023253917695%2C46.52099076640412%2C6.631101965904237%2C46.52202060029237&amp;layer=mapnik&amp;marker=46.52150568578828%2C6.630062609910965"
          style="border: 1px solid black"
        >
        </iframe>
        <small>
          <a
            href="https://www.openstreetmap.org/?mlat=46.52151&amp;mlon=6.63006#map=19/46.52151/6.63006&amp;layers=N"
          >
          </a>
        </small>
      </div>
    </div>

    <!-- <div class="socials">
        <a
          class="icon"
          href="https://twitter.com/bbirdlausanne?lang=en"
          target="_blank"
        >
          <img src="../../assets/images/icons/twitter.png" alt="" />
        </a>
        <a class="icon" href="https://vimeo.com/212492250" target="_blank">
          <img src="../../assets/images/icons/vimeo.png" alt="" />
        </a>
        <a
          class="icon"
          href="https://twitter.com/bbirdlausanne?lang=en"
          target="_blank"
        >
          <img src="../../assets/images/icons/facebook.png" alt="" />
        </a>
        <a
          class="icon"
          href="https://www.instagram.com/blackbirdlausanne/?hl=en"
          target="_blank"
        >
          <img src="../../assets/images/icons/instagram.png" alt="" />
        </a>
      </div> -->
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  props: ["footer"]
};
</script>

<style lang="scss" scoped>
footer {
  height: 100%;
  background-color: #000;
  color: white;
  padding: $gap;
  position: relative;
  z-index: 5;

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: 1fr;
    gap: $gap;
    grid-template-areas: "address hours map";
  }

  .address {
    grid-area: address;
    padding: $gap;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.6rem;
    }
  }

  .hours {
    grid-area: hours;
    padding: $gap;
    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.6rem;
    }
  }

  .map {
    grid-area: map;
    padding: $gap 0;
    padding-right: $gap;
  }

  .big {
    font-family: "Roboto Mono", monospace;
    font-weight: 900;

    -webkit-text-stroke: 1px $white;
    letter-spacing: 8px;
    color: transparent;
    margin: 0;
    padding: 0 $gap;
  }

  .socials {
    display: flex;
    justify-content: space-around;
    margin-top: 6 * $gap;

    .icon {
      max-width: 30px;
      margin: 0 (2 * $gap) 0 0;
    }
  }

  .container {
    align-items: space-between;
    justify-content: flex-start;
    flex-direction: column;

    @include media(sm) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }

  @include media(sm) {
    padding: $gap 0;
  }

  img {
    object-fit: contain;
    width: 60px;
    height: 60px;
  }

  .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    p {
      line-height: 1.5;
      margin-top: $gap / 2.5;
    }
  }

  .hours {
    div {
      margin-top: $gap / 2.5;
    }
    p {
      line-height: 1.5;
    }
  }

  .left-section {
    flex-basis: 100%;
    width: 65vw;

    @include media(sm) {
      flex-basis: unset;
    }
  }
}

@media (max-width: $mobile-large) {
  footer {
    .grid-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 0.5fr 1fr 1fr;
      gap: 0px 0px;
      grid-template-areas:
        "address"
        "hours"
        "map";
    }
    .address {
      grid-area: address;
    }
    .hours {
      grid-area: hours;
    }
    .map {
      grid-area: map;
    }
  }
}
</style>
