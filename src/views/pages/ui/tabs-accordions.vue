<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Tabs & Accordions component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Tabs & Accordions",
      items: [
        {
          text: "UI Elements"
        },
        {
          text: "Tabs & Accordions",
          active: true
        }
      ],
      text: `
         Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
        `,
      content: `Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus.`
    };
  },
  middleware: "authentication"
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Default Tabs</BCardTitle>
            <p class="card-title-desc">
              Use the tab JavaScript plugin—include it individually or through
              the compiled
              <code class="highlighter-rouge">bootstrap.js</code>
              file—to extend our navigational tabs and pills to create tabbable
              panes of local content, even via dropdown menus.
            </p>
            <BTabs content-class="p-3 text-muted">
              <BTab
                active
                class="border-0"
                title-item-class="tabs-accordions-link"
              >
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                {{ text }}
              </BTab>
              <BTab title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                {{ content }}
              </BTab>
              <BTab title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                {{ text }}
              </BTab>
              <BTab title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                {{ content }}
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Justify Tabs</BCardTitle>
            <p class="card-title-desc">
              Use the tab JavaScript plugin—include it individually or through
              the compiled
              <code class="highlighter-rouge">bootstrap.js</code>
              file—to extend our navigational tabs and pills to create tabbable
              panes of local content, even via dropdown menus.
            </p>
            <BTabs pills justified content-class="p-3 text-muted">
              <BTab
                active
                class="border-0"
                title-item-class="tabs-accordions-link"
              >
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                {{ text }}
              </BTab>
              <BTab title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                {{ content }}
              </BTab>
              <BTab title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                {{ text }}
              </BTab>
              <BTab title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                {{ content }}
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Vertical Nav Tabs</BCardTitle>
            <p class="card-title-desc">Example of Vertical nav tabs</p>
            <BTabs
              pills
              vertical
              nav-class="p-0"
              nav-wrapper-class="col-sm-3"
              content-class="pt-0 px-2 text-muted"
              class="vertical-accordions"
            >
              <BTab
                title="Home"
                active
                title-item-class="mb-2 tabs-accordions-link"
              >
                <BCardText>{{ text }}</BCardText>
              </BTab>
              <BTab
                title="Profile"
                title-item-class="mb-2 tabs-accordions-link"
              >
                <BCardText>{{ content }}</BCardText>
              </BTab>
              <BTab
                title="Messages"
                title-item-class="mb-2 tabs-accordions-link"
              >
                <BCardText>{{ text }}</BCardText>
              </BTab>
              <BTab title="Settings" title-item-class="tabs-accordions-link">
                <BCardText>{{ content }}</BCardText>
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Custom Tabs</BCardTitle>
            <p class="card-title-desc">Example of custom tabs</p>
            <BTabs
              justified
              nav-class="nav-tabs-custom"
              content-class="p-3 text-muted"
            >
              <BTab active title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Home</span>
                </template>
                {{ text }}
              </BTab>
              <BTab title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-user"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Profile</span>
                </template>
                {{ content }}
              </BTab>
              <BTab title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Messages</span>
                </template>
                {{ text }}
              </BTab>
              <BTab title-item-class="tabs-accordions-link">
                <template v-slot:title>
                  <span class="d-inline-block d-sm-none">
                    <i class="fas fa-cog"></i>
                  </span>
                  <span class="d-none d-sm-inline-block">Settings</span>
                </template>
                {{ content }}
              </BTab>
            </BTabs>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <!-- Collapse -->
    <BRow>
      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Default Collapse</BCardTitle>
            <p class="card-title-desc mb-3">
              You can use a link with the
              <code class="highlighter-rouge">href</code>
              attribute, or a button with the
              <code class="highlighter-rouge">data-target</code>
              attribute. In both cases, the
              <code class="highlighter-rouge">data-toggle="collapse"</code>
              is required.
            </p>
            <BButton v-b-toggle.collapse class="m-1" variant="primary"
              >Link with href</BButton
            >

            <!-- Using value -->
            <BButton v-b-toggle="'collapse'" class="m-1" variant="primary"
              >Button with data-target</BButton
            >

            <!-- Element to collapse -->
            <BCollapse id="collapse" visible class="mt-1">
              <BCard
                >Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.</BCard
              >
            </BCollapse>
          </BCardBody>
        </BCard>
      </BCol>

      <BCol lg="6">
        <BCard no-body>
          <BCardBody>
            <BCardTitle>Accordion example</BCardTitle>
            <p class="card-title-desc">
              Extend the default collapse behavior to create an accordion.
            </p>
            <div role="tablist">
              <BCard no-body class="mb-1 shadow-none">
                <BCardHeader header-tag="header" role="tab">
                  <h6 class="m-0">
                    <a
                      v-b-toggle.accordion-1
                      class="nav-link"
                      href="javascript: void(0);"
                      >Collapsible Group Item #1</a
                    >
                  </h6>
                </BCardHeader>
                <BCollapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <BCardBody>
                    <BCardText>{{ text }}</BCardText>
                  </BCardBody>
                </BCollapse>
              </BCard>

              <BCard no-body class="mb-1">
                <BCardHeader header-tag="header" role="tab">
                  <h6 class="m-0">
                    <a
                      v-b-toggle.accordion-2
                      class="nav-link"
                      href="javascript: void(0);"
                      >Collapsible Group Item #2</a
                    >
                  </h6>
                </BCardHeader>
                <BCollapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <BCardBody>
                    <BCardText>{{ text }}</BCardText>
                  </BCardBody>
                </BCollapse>
              </BCard>

              <BCard no-body class="mb-1">
                <BCardHeader header-tag="header" role="tab">
                  <h6 class="m-0">
                    <a
                      v-b-toggle.accordion-3
                      class="nav-link"
                      href="javascript: void(0);"
                      >Collapsible Group Item #3</a
                    >
                  </h6>
                </BCardHeader>
                <BCollapse
                  id="accordion-3"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <BCardBody>
                    <BCardText>{{ text }}</BCardText>
                  </BCardBody>
                </BCollapse>
              </BCard>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>

<style lang="scss">
.vertical-accordions {
  .nav-link {
    width: 100% !important;
    text-align: left !important;
  }
}

[data-bs-theme="dark"] {
  .tabs-accordions-link {
    .nav-link:not(.active) {
      color: #fff !important;
      :hover {
        color: var(--bs-nav-link-color) !important;
      }
    }
  }
}

[data-bs-theme="light"] {
  .tabs-accordions-link {
    .nav-link:not(.active) {
      color: black !important;
      :hover {
        color: var(--bs-nav-link-color) !important;
      }
    }
  }
}

.nav-justified .tabs-accordions-link {
  text-align: center !important;
}
</style>
