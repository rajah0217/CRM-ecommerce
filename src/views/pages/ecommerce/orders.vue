<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";

/**
 * Orders component
 */
export default {
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Orders",
      items: [
        {
          text: "CRM",
        },
        {
          text: "Orders",
          active: true,
        },
      ],
      orderData: [
        {
          id: "#MN0132",
          date: "10 Jul, 2020",
          cname: "Melvin Martin",
          uname: "Martin Melvin",
          number: "5",
          total: "$3542",
          status: "Shipped",
        },
        {
          id: "#MN0131",
          date: "09 Jul, 2020",
          cname: "Michael Roy",
          uname: "Roy Michael",
          number: "6",
          total: "$3530",
          status: "Shipped",
        },
        {
          id: "#MN0130",
          date: "08 Jul, 2020",
          cname: "Wolf Shelby",
          uname: "Shelby Wolf",
          number: "2",
          total: "$3523",
          status: "In Production",
        },
        {
          id: "#MN0129",
          date: "07 Jul, 2020",
          cname: "Riddick James",
          uname: "James Riddick",
          number: "2",
          total: "$3573",
          status: "Shipped",
        },
        {
          id: "#MN0128",
          date: "07 Jul, 2020",
          cname: "Kwan George",
          uname: "George Kwan",
          number: "6",
          total: "$3560",
          status: "Recieved",
        },
        {
          id: "#MN0127",
          date: "06 Jul, 2020",
          cname: "Patterson Kevin",
          uname: "Kevin Patterson",
          number: "4",
          total: "$3565",
          status: "Shipped",
        },
        {
          id: "#MN0126",
          date: "05 Jul, 2020",
          cname: "Orr Danny",
          uname: "Danny Orr",
          number: "6",
          total: "$3561",
          status: "Shipped",
        },
        {
          id: "#MN0125",
          date: "04 Jul, 2020",
          cname: "Garcia Sylvia",
          uname: "Sylvia Garcia",
          number: "4",
          total: "$3553",
          status: "In Production",
        },
        {
          id: "#MN0124",
          date: "04 Jul, 2020",
          cname: "Denney Charles",
          uname: "Charles Denney",
          number: "7",
          total: "$3552",
          status: "Shipped",
        },
        {
          id: "#MN0123",
          date: "03 Jul, 2020",
          cname: "Farrell Lisa",
          uname: "Lisa Farrell",
          number: "5",
          total: "$3567",
          status: "Shipped",
        },
        {
          id: "#MN0122",
          date: "02 Jul, 2020",
          cname: "Franco Connie",
          uname: "Connie Franco",
          number: "3",
          total: "$3563",
          status: "In Production",
        },
        {
          id: "#MN0121",
          date: "02 Jul, 2020",
          cname: "Lara Casillas",
          uname: "Casillas Lara",
          number: "5",
          total: "$3571",
          status: "Delivered",
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 25, 50, 100],
      filter: null,
      filterOn: [],
      sortBy: "age",
      sortDesc: false,
      fields: [
        {
          key: "check",
          label: "",
        },
        {
          key: "id",
          label: "Order ID",
        },
        {
          key: "date",
          sortable: true,
        },
        {
          key: "cname",
          label: "Client Name",
          sortable: true,
        },
        {
          key: "uname",
          label: "User Name",
          sortable: true,
        },
        {
          key: "number",
          label: "Supplier Number",
          sortable: true,
        },
        {
          key: "total",
          sortable: true,
        },
        {
          key: "status",
          label: "Order Status",
        },
        "action",
      ],
    };
  },
  middleware: "authentication",
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.orderData.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <BRow>
      <BCol cols="12">
        <div>
          <div class="float-end">
            <form class="d-inline-flex mb-3">
              <label class="my-1 me-2" for="order-selectinput">Orders</label>
              <select class="form-select" id="order-selectinput">
                <option selected="">All</option>
                <option value="1">Recieved</option>
                <option value="2">In Production</option>
                <option value="3">Shipped</option>
                <option value="4">Delivered</option>
              </select>
            </form>
          </div>
          <BButton type="button" class="btn btn-success mb-3">
            <i class="mdi mdi-plus me-1"></i> Add New Order
          </BButton>
        </div>
        <div
          class="table table-centered datatable dt-responsive nowrap table-card-list dataTable no-footer dtr-inline"
        >
          <BRow>
            <BCol sm="12" md="6">
              <div id="tickets-table_length" class="dataTables_length">
                <label class="d-inline-flex align-items-center fw-normal">
                  Show&nbsp;
                  <BFormSelect
                    v-model="perPage"
                    size="sm"
                    :options="pageOptions"
                  />&nbsp;entries
                </label>
              </div>
            </BCol>
            <!-- Search -->
            <BCol sm="12" cols="md-6">
              <div
                id="tickets-table_filter"
                class="dataTables_filter text-md-end"
              >
                <label class="d-inline-flex align-items-center fw-normal">
                  Search:
                  <BFormInput
                    v-model="filter"
                    type="search"
                    placeholder="Search..."
                    class="form-control form-control-sm ms-2"
                  ></BFormInput>
                </label>
              </div>
            </BCol>
            <!-- End search -->
          </BRow>
          <!-- Table -->

          <BTable
            table-class="table table-centered datatable table-card-list"
            thead-tr-class="bg-transparent"
            :items="orderData"
            :fields="fields"
            responsive="sm"
            :per-page="perPage"
            :current-page="currentPage"
            :sort-by.sync="sortBy"
            :sort-desc.sync="sortDesc"
            :filter="filter"
            :filter-included-fields="filterOn"
            @filtered="onFiltered"
          >
            <template v-slot:cell(check)="data">
              <div class="custom-control custom-checkbox text-center">
                <input
                  type="checkbox"
                  class="form-check-input"
                  :id="`contacusercheck${data.item.id}`"
                />
                <label
                  class="custom-control-label"
                  :for="`contacusercheck${data.item.id}`"
                ></label>
              </div>
            </template>
            <template v-slot:cell(id)="data">
              <a href="javascript: void(0);" class="nav-link fw-bold">{{
                data.item.id
              }}</a>
            </template>

            <template v-slot:cell(cname)="data">
              <a href="#" class="text-body">{{ data.item.cname }}</a>
            </template>

            <template v-slot:cell(uname)="data">
              <a href="#" class="text-body">{{ data.item.uname }}</a>
            </template>

            <template v-slot:cell(number)="data">
              <a href="#" class="text-body">{{ data.item.number }}</a>
            </template>

            <template v-slot:cell(status)="data">
              <div
                class="badge bg-pill bg-soft-success font-size-12"
                :class="{
                  'bg-soft-danger': data.item.status === 'Recieved',
                  'bg-soft-warning': data.item.status === 'In Production',
                }"
              >
                {{ data.item.status }}
              </div>
            </template>
            <template v-slot:cell(action)>
              <ul class="list-inline mb-0">
                <li class="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    class="px-2 text-primary"
                    v-b-tooltip.hover
                    title="Edit"
                  >
                    <i class="uil uil-pen font-size-18"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    href="javascript:void(0);"
                    class="px-2 text-danger"
                    v-b-tooltip.hover
                    title="Delete"
                  >
                    <i class="uil uil-trash-alt font-size-18"></i>
                  </a>
                </li>
              </ul>
            </template>
          </BTable>
        </div>
        <BRow>
          <BCol>
            <div class="dataTables_paginate paging_simple_numbers float-end">
              <ul class="pagination pagination-rounded">
                <!-- pagination -->
                <BPagination
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                ></BPagination>
              </ul>
            </div>
          </BCol>
        </BRow>
      </BCol>
    </BRow>
  </Layout>
</template>
