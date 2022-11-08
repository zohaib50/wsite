<template>
    <div class="dashboard-body">
        <div id="example_wrapper" class="dataTables_wrapper dt-bootstrap5">
            <div class="row">
                <div class="col-sm-12 col-md-6">
                    <div class="dataTables_length">
                        <label>Show
                            <select class="form-select form-select-sm" @change="getjobs" v-model="limit">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select> entries
                        </label>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="dataTables_filter">
                        <label>Search:
                            <input type="search" class="form-control form-control-sm" placeholder="" @change="getjobs" v-model="search">
                        </label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <table class="table table-striped dataTable" style="width: 100%;">
                        <thead>
                        <tr>
                            <th class="sorting sorting_asc" style="width: 80px;">Image</th>
                            <th class="sorting" style="width: 200px;">Contractor Name</th>
                            <th class="sorting" style="width: 101px;">Pakage</th>
                            <th class="sorting" style="width: 41px;">Price</th>
                            <th class="sorting" style="width: 87px;">Status</th>
                            <th class="sorting" style="width: 76px;">Feedback</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-if="tabledata.data.length == 0">
                            <td colspan="6" class="text-center"><h6> No Record Found</h6></td>
                        </tr>
                        <tr v-else v-for="(item, index) in tabledata.data">
                            <td ><img :src="url+item.merchent.profile_image" class="rounded table-img"></td>
                            <td>{{item.merchent.name}}</td>
                            <td>{{item.package}}</td>
                            <td>{{item.price}}</td>
                            <td>
                                <span class="badge bg-primary text-wrap" v-if="item.is_processed == 0">Panding</span>
                                <span v-if="item.order[0]">
                                    <span class="badge bg-warning text-wrap" v-if="item.order[0].status == 'processed'">Processing</span>
                                    <span class="badge bg-success text-wrap" v-if="item.order[0].status == 'completed'">Complete</span>
                                </span>
<!--                                {{item.order[0].status}}-->
                            </td>
                            <td>
                                <div v-if="item.order[0]">
                                    <router-link :to="{name : 'job', params: { id: item.id }}" class="action" v-if="item.order[0].status == 'completed'">
                                        <i class="fa fa-eye"></i>
                                    </router-link>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-5">
                    <div class="dataTables_info" id="example_info" role="status" aria-live="polite">Showing {{tabledata.from}} to {{tabledata.to}} of
                        {{tabledata.total}} entries
                    </div>
                </div>
                <div class="col-sm-12 col-md-7">
                    <pagination :data="tabledata" @pagination-change-page="getjobs">
                        <template #prev-nav>
                            <span>Previous</span>
                        </template>
                        <template #next-nav>
                            <span>Next</span>
                        </template>
                    </pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import LaravelVuePagination from "laravel-vue-pagination";
export default {
    name: "contractors",
    data(){
        return{
            url:process.env.MIX_APP_URL,
            limit:5,
            search:'',
            tabledata:null,
        }
    },
    mounted() {
        this.getjobs();
        window.scrollTo(0, 0)
    },
    computed: {
        ...mapGetters("auth", ["user"])
    },
    methods: {
        getjobs: function (){
            axios.get('customer/jobs?page='+1+'&search='+this.search+'&limit='+this.limit).then(response => {
                console.log(response.data);
                this.tabledata = response.data;
            }).catch(errors => {

            })
        }
    },
    components: {
        'pagination': LaravelVuePagination
    }
}
</script>

<style scoped>

</style>
