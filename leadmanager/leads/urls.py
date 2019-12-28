from rest_framework import routers
from .api import LeadViewSet

router = routers.DefaultRouter()
router.register('leads', LeadViewSet, base_name='Leads')
urlpatterns = router.urls